"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx"; // Import clsx

type BackButtonProps = {
  label: string;
  className?: string;
};

const defaultButtonStyles = `
  py-2 px-4
  rounded-lg
  font-medium
  transition-colors duration-150
  focus:outline-none focus:ring-2 focus:ring-opacity-50
  bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-400
  dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 dark:focus:ring-slate-500
`
  .replace(/\s+/g, " ")
  .trim();

export default function BackButton({ label, className }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  // Use clsx to combine class names
  const combinedClassName = clsx(defaultButtonStyles, className);

  return (
    <button onClick={handleClick} className={combinedClassName}>
      {label}
    </button>
  );
}
