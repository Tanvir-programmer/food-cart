import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm animate-pulse">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="h-12 w-12 rounded-full bg-gray-200"></div>

          {/* Name & Date */}
          <div className="space-y-2">
            <div className="h-4 w-24 rounded bg-gray-200"></div>
            <div className="h-3 w-16 rounded bg-gray-200"></div>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1">
          <div className="h-4 w-4 rounded bg-gray-200"></div>
          <div className="h-4 w-4 rounded bg-gray-200"></div>
          <div className="h-4 w-4 rounded bg-gray-200"></div>
          <div className="h-4 w-4 rounded bg-gray-200"></div>
          <div className="h-4 w-4 rounded bg-gray-200"></div>
        </div>
      </div>

      {/* Review text */}
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-gray-200"></div>
        <div className="h-3 w-11/12 rounded bg-gray-200"></div>
        <div className="h-3 w-10/12 rounded bg-gray-200"></div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-50 pt-4">
        <div className="h-4 w-20 rounded bg-gray-200"></div>
        <div className="h-4 w-12 rounded bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;