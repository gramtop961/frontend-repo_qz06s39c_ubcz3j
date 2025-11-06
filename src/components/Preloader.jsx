import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ progress = 0, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-white/70 dark:bg-black/70 backdrop-blur"
        >
          <div className="w-80 max-w-[85vw]">
            <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.3 }}
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-zinc-800 dark:text-zinc-200">
              Loading {Math.min(100, Math.max(0, Math.round(progress)))}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
