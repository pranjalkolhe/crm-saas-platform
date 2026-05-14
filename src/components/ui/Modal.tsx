import type { ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({ open, onClose, title, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
        fixed inset-0 z-50
        overflow-y-auto
        bg-black/40
        backdrop-blur-sm
        p-6
      "
        >
          <div
            className="
          flex min-h-full
          items-center
          justify-center
        "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
            w-full
            max-w-2xl
            rounded-3xl
            bg-white
            shadow-2xl
            max-h-[90vh]
            overflow-y-auto
          "
            >
              {/* Header */}
              <div className="border-b border-slate-200 px-8 py-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

                  <button
                    onClick={onClose}
                    className="
                  text-2xl
                  text-slate-400
                  transition-all
                  hover:text-slate-700
                "
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">{children}</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
