import React from "react";
import Link from "next/link"; // 1. Import Link

const FoodCard = ({ food }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={food.foodImg}
          alt={food.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-orange-600 backdrop-blur-sm">
            {food.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
            {food.title}
          </h3>
          <p className="text-lg font-black text-orange-500">${food.price}</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button className="flex-1 rounded-xl bg-orange-500 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600 active:scale-95">
            Add to Cart
          </button>

          {/* 2. Wrap the button in a Link using food.id */}
          <Link href={`/foods/${food.id}`} className="flex-1">
            <button className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-100 active:scale-95">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
