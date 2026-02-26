import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  open: boolean;
  onClose?: () => void;
  message?: string;
}

export const Toast: React.FC<ToastProps> = ({ open, onClose, message = 'Sent' }) => {
  React.useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onClose && onClose(), 2400);
    return () => clearTimeout(t);
  }, [open, onClose]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="absolute right-6 bottom-6">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="pointer-events-auto bg-primary text-white px-5 py-3 rounded-2xl shadow-lg"
            >
              <div className="font-semibold">{message}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Toast;
