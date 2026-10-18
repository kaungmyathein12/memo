"use client";

import { useRef, type ReactNode } from "react";
import Button from "@/components/ui/Button";

type ModalProps = {
  label: string;
  title: string;
  onOpen?: () => void;
  children: ReactNode;
};

export default function Modal({ label, title, onOpen, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function open() {
    onOpen?.();
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  return (
    <>
      <Button type="button" onClick={open}>
        {label}
      </Button>

      <dialog
        ref={dialogRef}
        // Clicks on the backdrop target the dialog itself, not its content.
        onClick={(event) => event.target === dialogRef.current && close()}
        // text-left resets alignment inherited from wherever the trigger sits.
        className="m-auto w-full max-w-sm rounded-3xl bg-surface p-6 text-left sm:p-8 text-foreground backdrop:bg-black/40"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">{title}</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="text-2xl text-subtle hover:text-muted"
          >
            ×
          </button>
        </div>
        {children}
      </dialog>
    </>
  );
}
