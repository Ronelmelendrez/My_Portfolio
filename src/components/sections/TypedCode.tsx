import { useEffect, useState } from 'react';

const lines = [
  { indent: 0, text: 'const app = createApp({' },
  { indent: 2, text: 'name: "portfolio",' },
  { indent: 2, text: 'stack: ["React", "TypeScript", "Vite"],' },
  { indent: 2, text: 'style: "Tailwind CSS",' },
  { indent: 2, text: 'animation: "Framer Motion",' },
  { indent: 0, text: '});' },
  { indent: 0, text: '' },
  { indent: 0, text: 'export default app;' },
];

const fullText = lines.map(l => '  '.repeat(l.indent) + l.text).join('\n');

export default function TypedCode() {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, []);

  return (
    <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-hidden">
      <code>{displayed}<span className="inline-block w-[2px] h-[14px] bg-blue animate-blink align-middle ml-0.5" /></code>
    </pre>
  );
}
