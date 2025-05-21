"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `/?${params.toString()}`;
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  if (totalPages <= 1) {
    return null; // Don't render pagination if there's only one page or no pages
  }

  const buttonBaseStyle =
    "px-4 py-2 border rounded-md transition-colors duration-150 text-sm font-medium";
  const enabledStyle =
    "bg-[var(--card-bg)] text-[var(--primary)] border-[var(--border)] hover:bg-[var(--accent)] hover:bg-opacity-20 hover:border-[var(--primary)]";
  const disabledStyle =
    "bg-[var(--muted)] bg-opacity-10 text-[var(--muted)] border-[var(--muted)] opacity-60 cursor-not-allowed";

  return (
    <nav
      aria-label="Pagination"
      className="flex justify-center items-center space-x-3 my-8"
    >
      <Link
        href={createPageURL(currentPage - 1)}
        className={clsx(
          buttonBaseStyle,
          isFirstPage ? disabledStyle : enabledStyle
        )}
        aria-disabled={isFirstPage}
        tabIndex={isFirstPage ? -1 : undefined}
      >
        Previous
      </Link>

      <span className="text-sm text-[var(--muted)]">
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={createPageURL(currentPage + 1)}
        className={clsx(
          buttonBaseStyle,
          isLastPage ? disabledStyle : enabledStyle
        )}
        aria-disabled={isLastPage}
        tabIndex={isLastPage ? -1 : undefined}
      >
        Next
      </Link>
    </nav>
  );
}
