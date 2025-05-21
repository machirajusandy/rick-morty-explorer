"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialName = searchParams.get("name") || "";
  const [searchTerm, setSearchTerm] = useState(initialName);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (!searchTerm.trim()) {
      return; // Prevent search if input is empty
    }
    params.set("name", searchTerm.trim());
    params.set("page", "1"); // Reset to first page on new search
    router.push(`/?${params.toString()}`);
  };

  const handleClearSearch = () => {
    setSearchTerm(""); // Clear the input field state
    const params = new URLSearchParams(searchParams.toString());
    params.delete("name"); // Remove name parameter from URL
    params.set("page", "1"); // Reset to first page
    router.push(`/?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by character name..."
          className="flex-grow p-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none bg-[var(--card-bg)] text-[var(--foreground)] placeholder-[var(--muted)]"
          aria-label="Search by character name"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary-dark)] transition-colors duration-150 font-medium"
        >
          Search
        </button>
        {(searchTerm || initialName) && ( // Conditionally render Clear button
          <button
            type="button"
            onClick={handleClearSearch}
            className="w-full sm:w-auto px-6 py-3 border border-[var(--muted)] text-[var(--muted)] rounded-md hover:border-[var(--danger)] hover:text-[var(--danger)] transition-colors duration-150 font-medium"
            aria-label="Clear search"
          >
            Clear
          </button>
        )}
      </div>
    </form>
  );
}
