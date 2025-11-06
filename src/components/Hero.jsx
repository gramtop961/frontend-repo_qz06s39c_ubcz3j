import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[420px] sm:h-[520px] w-full overflow-hidden rounded-b-2xl">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-black/60 dark:via-black/20 dark:to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              TikTok Downloader — No Watermark
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              Paste any TikTok link, we’ll fetch a clean video for you. Fast, free, and watermark-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
