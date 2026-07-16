import { useEffect, useState } from 'react';

interface Token {
  text: string;
  color: string;
}

const keywords = new RegExp('^(?:const|export|default|import|from|return|function|new|if|else|true|false|null|undefined|let|var)$');
const types = new RegExp('^(?:React|FC|string|number|boolean|void|any|Promise|HTMLElement)$');

function tokenize(line: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < line.length) {
    if (line[i] === ' ' || line[i] === '\t') {
      let j = i;
      while (j < line.length && (line[j] === ' ' || line[j] === '\t')) j++;
      tokens.push({ text: line.slice(i, j), color: '' });
      i = j;
      continue;
    }
    if (line[i] === '"' || line[i] === "'" || line[i] === '`') {
      const q = line[i];
      let j = i + 1;
      while (j < line.length && line[j] !== q) j++;
      j++;
      tokens.push({ text: line.slice(i, j), color: '#ce9178' });
      i = j;
      continue;
    }
    if (/[0-9]/.test(line[i])) {
      let j = i;
      while (j < line.length && /[0-9.]/.test(line[j])) j++;
      tokens.push({ text: line.slice(i, j), color: '#b5cea8' });
      i = j;
      continue;
    }
    if (/[\w$_]/.test(line[i])) {
      let j = i;
      while (j < line.length && /[\w$_]/.test(line[j])) j++;
      const word = line.slice(i, j);
      if (keywords.test(word)) {
        tokens.push({ text: word, color: '#569cd6' });
      } else if (types.test(word)) {
        tokens.push({ text: word, color: '#4ec9b0' });
      } else if (j < line.length && line[j] === '(') {
        tokens.push({ text: word, color: '#dcdcaa' });
      } else {
        tokens.push({ text: word, color: '#9cdcfe' });
      }
      i = j;
      continue;
    }
    tokens.push({ text: line[i], color: '#d4d4d4' });
    i++;
  }
  return tokens;
}

const rawLines = [
  'const app = createApp({',
  '  name: "portfolio",',
  '  stack: ["React", "TypeScript", "Vite"],',
  '  style: "Tailwind CSS",',
  '  animation: "Framer Motion",',
  '});',
  '',
  'export default app;',
];

const tokenizedLines = rawLines.map(tokenize);
const totalChars = tokenizedLines.flat().reduce((sum, t) => sum + t.text.length, 0);

export default function TypedCode() {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const timer = setInterval(() => {
      count++;
      setCharCount(count);
      if (count >= totalChars) clearInterval(timer);
    }, 32);
    return () => clearInterval(timer);
  }, []);

  let remaining = charCount;

  return (
    <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-hidden">
      <code>
        {tokenizedLines.map((tokens, lineIdx) => {
          const rendered = tokens.map((token, tIdx) => {
            if (remaining <= 0) return null;
            const visible = token.text.slice(0, remaining);
            remaining -= token.text.length;
            if (!visible) return null;
            return (
              <span key={tIdx} style={token.color ? { color: token.color } : undefined}>
                {visible}
              </span>
            );
          });
          return (
            <div key={lineIdx}>
              {rendered}
            </div>
          );
        })}
        {charCount < totalChars && (
          <span className="inline-block w-[2px] h-[14px] bg-[#569cd6] animate-blink align-middle ml-0.5" />
        )}
      </code>
    </pre>
  );
}
