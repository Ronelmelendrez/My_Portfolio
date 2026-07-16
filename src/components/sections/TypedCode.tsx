import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Token = [className: string, text: string];

const CODE_LINES: Token[][] = [
  [
    ['tok-key', 'const'],
    ['tok-punc', ' '],
    ['tok-var', 'developer'],
    ['tok-punc', ' = {'],
  ],
  [
    ['tok-fn', '  name'],
    ['tok-punc', ': '],
    ['tok-str', '"Ronel Melendrez"'],
    ['tok-punc', ','],
  ],
  [
    ['tok-fn', '  role'],
    ['tok-punc', ': '],
    ['tok-str', '"Aspiring Full Stack Developer"'],
    ['tok-punc', ','],
  ],
  [
    ['tok-fn', '  status'],
    ['tok-punc', ': '],
    ['tok-str', '"Fresh Graduate"'],
    ['tok-punc', ','],
  ],
  [
    ['tok-fn', '  focus'],
    ['tok-punc', ': ['],
    ['tok-str', '"React"'],
    ['tok-punc', ', '],
    ['tok-str', '"TypeScript"'],
    ['tok-punc', ', '],
    ['tok-str', '"Node.js"'],
    ['tok-punc', ', '],
    ['tok-str', '"Express.js"'],
    ['tok-punc', ', '],
    ['tok-str', '"Supabase"'],
    ['tok-punc', '],'],
  ],
  [
    ['tok-fn', '  learning'],
    ['tok-punc', ': ['],
    ['tok-str', '"Machine Learning"'],
    ['tok-punc', ', '],
    ['tok-str', '"Deep Learning"'],
    ['tok-punc', ', '],
    ['tok-str', '"Computer Vision"'],
    ['tok-punc', ', '],
    ['tok-str', '"AI Applications"'],
    ['tok-punc', '],'],
  ],
  [
    ['tok-fn', '  available'],
    ['tok-punc', ': '],
    ['tok-key', 'true'],
  ],
  [['tok-punc', '};']],
  [],
  [['tok-com', '// what I enjoy building']],
  [
    ['tok-key', 'function'],
    ['tok-punc', ' '],
    ['tok-fn', 'buildProject'],
    ['tok-punc', '(idea) {'],
  ],
  [
    ['tok-key', '  return'],
    ['tok-punc', ' '],
    ['tok-fn', 'plan'],
    ['tok-punc', '(idea)'],
  ],
  [
    ['tok-punc', '    .'],
    ['tok-fn', 'then'],
    ['tok-punc', '('],
    ['tok-fn', 'develop'],
    ['tok-punc', ')'],
  ],
  [
    ['tok-punc', '    .'],
    ['tok-fn', 'then'],
    ['tok-punc', '('],
    ['tok-fn', 'deploy'],
    ['tok-punc', ');'],
  ],
  [['tok-punc', '}']],
];

export default function TypedCode() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [visibleLines, setVisibleLines] = useState<{ segs: Token[]; charCount: number }[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      if (lineIndex >= CODE_LINES.length) {
        setDone(true);
        return;
      }
      const segs = CODE_LINES[lineIndex];
      const fullLength = segs.reduce((sum, [, text]) => sum + text.length, 0);

      const typeChar = () => {
        setVisibleLines((prev) => {
          const next = [...prev];
          next[lineIndex] = { segs, charCount: charIndex };
          return next;
        });
        if (charIndex <= fullLength) {
          charIndex++;
          timeoutId = setTimeout(typeChar, fullLength ? 14 : 0);
        } else {
          lineIndex++;
          charIndex = 0;
          timeoutId = setTimeout(typeNext, 90);
        }
      };
      typeChar();
    };

    typeNext();
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="editor-body" ref={ref}>
      {visibleLines.map((line, i) => {
        let remaining = line.charCount;
        return (
          <div key={i}>
            <span className="ln">{i + 1}</span>
            <span>
              {line.segs.map(([cls, text], j) => {
                if (remaining <= 0) return null;
                const take = Math.min(text.length, remaining);
                remaining -= take;
                return (
                  <span key={j} className={cls}>
                    {text.slice(0, take)}
                  </span>
                );
              })}
            </span>
          </div>
        );
      })}
      {done && <span className="cursor-blink animate-blink" />}
    </div>
  );
}