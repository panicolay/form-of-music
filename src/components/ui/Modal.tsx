'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Dialog } from 'radix-ui';
import { type ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ModalTriggerProps {
  children: ReactNode;
}

interface ModalHeaderProps {
  children: ReactNode;
}

interface ModalPortalProps {
  children: ReactNode;
  open: boolean;
}

interface ModalContentProps {
  children: ReactNode;
}

interface ModalFooterProps {
  children: ReactNode;
}

interface ModalCloseProps {
  children: ReactNode;
}

export default function Modal({ children, open, onOpenChange }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

Modal.Trigger = function ModalTrigger({ children }: ModalTriggerProps) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
};

Modal.Portal = function ModalPortal({ children, open }: ModalPortalProps) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog.Portal forceMount>
          <Dialog.Overlay asChild forceMount>
            <motion.div
              key="overlay"
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/75 z-50"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
            />
          </Dialog.Overlay>
          <div className="fixed inset-0 flex items-start justify-center max-w-md mx-auto px-4 pt-24 z-50">
            {/* TODO: find a way to remove this div */}
            <Dialog.Content asChild forceMount>
              <motion.div
                key="content"
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="w-full bg-black border border-zinc-500"
                exit={{
                  opacity: 0,
                  y: 8,
                  scale: 0.99,
                  transition: { duration: 0.08, delay: 0, ease: 'easeIn' },
                }}
                initial={{ opacity: 0, y: 8, scale: 0.99 }}
                transition={{
                  duration: 0.08,
                  delay: 0.08,
                  ease: 'easeOut',
                }}
              >
                {children}
              </motion.div>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      )}
    </AnimatePresence>
  );
};

Modal.Header = function ModalHeader({ children }: ModalHeaderProps) {
  return (
    <Dialog.Title className="m-4 text-2xl font-poppins uppercase font-semibold">
      {children}
    </Dialog.Title>
    // TODO: est-ce vraiment poppins qui est utilisé ici ?
  );
};

Modal.Content = function ModalContent({ children }: ModalContentProps) {
  return <div className="m-4">{children}</div>;
};

Modal.Footer = function ModalFooter({ children }: ModalFooterProps) {
  return (
    <div className="flex border-t border-zinc-500 divide-x divide-zinc-500">
      {children}
    </div>
  );
};

Modal.Close = function ModalClose({ children }: ModalCloseProps) {
  return <Dialog.Close asChild>{children}</Dialog.Close>;
};
