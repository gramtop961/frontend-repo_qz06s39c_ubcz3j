import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function UrlForm({ onResult }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!url.trim()) {
      setError('Please paste a TikTok link');
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${backend}/api/tiktok`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || 'Failed to fetch video');
      onResult(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
      onResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto -mt-16 sm:-mt-20">
      <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur rounded-xl shadow-lg p-4 sm:p-6 border border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="url"
            inputMode="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste TikTok link here..."
            className="flex-1 px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-medium shadow"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Fetching...
              </>
            ) : (
              'Download'
            )}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      </form>
    </div>
  );
}
