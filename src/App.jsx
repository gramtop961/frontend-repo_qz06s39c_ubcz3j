import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import UrlForm from './components/UrlForm';
import ResultCard from './components/ResultCard';
import Preloader from './components/Preloader';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Simulated preloader progress whenever loading
  useEffect(() => {
    if (!loading) return;
    setProgress(0);
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 18 + 5);
      setProgress(p);
      if (p >= 100) clearInterval(id);
    }, 180);
    return () => clearInterval(id);
  }, [loading]);

  const handleResult = (data) => {
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="sticky top-0 z-30 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-black/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">NoMark Tok</div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-sm px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <section className="max-w-6xl mx-auto px-4">
          <UrlForm
            onResult={(data) => {
              setLoading(true);
              handleResult(null);
              // Delay slightly to let preloader show then set result
              setTimeout(() => handleResult(data), 600);
            }}
          />
          <ResultCard result={result} />
        </section>
      </main>

      <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
          <p>For personal use only. Respect creators and platform terms.</p>
          <p>
            Built with love • <a className="underline hover:text-zinc-700 dark:hover:text-zinc-300" href="#">NoMark Tok</a>
          </p>
        </div>
      </footer>

      <Preloader visible={loading} progress={progress} />
    </div>
  );
}

export default App;
