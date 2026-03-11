"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;

    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);

    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex justify-center my-6">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-xl shadow-lg rounded-xl overflow-hidden border"
      >
        <input
          name="search"
          type="text"
          placeholder="Search food..."
          className="flex-1 px-4 py-3 outline-none text-gray-700"
        />

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 font-semibold hover:bg-orange-600 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;