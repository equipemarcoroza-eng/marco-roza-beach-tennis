import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress((window.scrollY / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[100] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-accent via-amber-300 to-accent transition-all duration-150 ease-out shadow-[0_0_8px_rgba(229,167,59,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
