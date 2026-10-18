import type { ComponentProps } from "react";

type TextFieldProps = ComponentProps<"input"> & { label: string };

export default function TextField({ label, ...props }: TextFieldProps) {
  return (
    <label className="flex flex-col gap-1">
      {label}
      <input
        {...props}
        className="w-full rounded-xl border-2 border-border bg-transparent px-4 py-2 outline-none transition-colors focus:border-green-600"
      />
    </label>
  );
}
