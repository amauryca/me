import { useEffect, useState } from "react";

const MatrixBackground = () => {
  const [drops, setDrops] = useState<number[]>([]);

  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20);
    const initialDrops = Array.from({ length: columns }, () => 1);
    setDrops(initialDrops);
  }, []);

  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]|\\:;\"'<>,.?/~`";

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
      {drops.map((_, index) => (
        <div
          key={index}
          className="absolute top-0 text-primary font-mono text-xs animate-matrix-rain"
          style={{
            left: `${index * 20}px`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="opacity-80">
              {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixBackground;