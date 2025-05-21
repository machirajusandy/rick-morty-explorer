"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const statusOptions = ["Alive", "Dead", "Unknown"];
const genderOptions = ["Female", "Male", "Genderless", "Unknown"];

export default function CharacterFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [gender, setGender] = useState(searchParams.get("gender") || "");

  const handleFilterSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default if called from form submit
    const params = new URLSearchParams(searchParams.toString());

    if (status) {
      params.set("status", status);
    } else {
      params.delete("status");
    }
    if (gender) {
      params.set("gender", gender);
    } else {
      params.delete("gender");
    }

    params.set("page", "1");
    router.push(`/?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setStatus("");
    setGender("");

    const params = new URLSearchParams(searchParams.toString());
    params.delete("status");
    params.delete("gender");
    params.set("page", "1");
    router.push(`/?${params.toString()}`);
  };

  const radioGroupLabelStyle =
    "block mb-2 text-sm font-medium text-[var(--muted)]";
  const radioLabelStyle =
    "ml-2 text-sm font-medium text-[var(--foreground)] cursor-pointer";
  const radioInputStyle =
    "w-4 h-4 text-[var(--primary)] bg-gray-100 border-gray-300 focus:ring-[var(--primary)] dark:focus:ring-[var(--primary)] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer";

  return (
    <form
      onSubmit={handleFilterSubmission}
      className="mb-8 p-4 border border-[var(--border)] rounded-lg bg-[var(--card-bg)] bg-opacity-50 shadow"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Status Filter */}
        <div>
          <label className={radioGroupLabelStyle}>Status</label>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <div className="flex items-center">
              <input
                id="status-any"
                type="radio"
                name="status"
                value=""
                checked={status === ""}
                onChange={(e) => setStatus(e.target.value)}
                className={radioInputStyle}
              />
              <label htmlFor="status-any" className={radioLabelStyle}>
                Any
              </label>
            </div>
            {statusOptions.map((opt) => (
              <div key={`status-${opt}`} className="flex items-center">
                <input
                  id={`status-${opt.toLowerCase()}`}
                  type="radio"
                  name="status"
                  value={opt}
                  checked={status === opt}
                  onChange={(e) => setStatus(e.target.value)}
                  className={radioInputStyle}
                />
                <label
                  htmlFor={`status-${opt.toLowerCase()}`}
                  className={radioLabelStyle}
                >
                  {opt}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Gender Filter */}
        <div>
          <label className={radioGroupLabelStyle}>Gender</label>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <div className="flex items-center">
              <input
                id="gender-any"
                type="radio"
                name="gender"
                value=""
                checked={gender === ""}
                onChange={(e) => setGender(e.target.value)}
                className={radioInputStyle}
              />
              <label htmlFor="gender-any" className={radioLabelStyle}>
                Any
              </label>
            </div>
            {genderOptions.map((opt) => (
              <div key={`gender-${opt}`} className="flex items-center">
                <input
                  id={`gender-${opt.toLowerCase()}`}
                  type="radio"
                  name="gender"
                  value={opt}
                  checked={gender === opt}
                  onChange={(e) => setGender(e.target.value)}
                  className={radioInputStyle}
                />
                <label
                  htmlFor={`gender-${opt.toLowerCase()}`}
                  className={radioLabelStyle}
                >
                  {opt}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3">
        <button
          type="button"
          onClick={handleClearFilters}
          className="px-5 py-2.5 border border-[var(--muted)] text-[var(--muted)] rounded-md hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors duration-150 font-medium text-sm"
        >
          Clear Filters
        </button>
        <button
          type="submit"
          className="px-5 py-2.5 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary-dark)] transition-colors duration-150 font-medium text-sm"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
}
