import { Download } from 'lucide-react';

export default function ResultCard({ result }) {
  if (!result) return null;
  const { title, thumbnail, download_url } = result;
  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow">
        <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800">
          {thumbnail ? (
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-400">No preview</div>
          )}
        </div>
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-2">{title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Watermark-free download</p>
          </div>
          <a
            href={download_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium"
          >
            <Download size={18} />
            Download Video
          </a>
        </div>
      </div>
    </div>
  );
}
