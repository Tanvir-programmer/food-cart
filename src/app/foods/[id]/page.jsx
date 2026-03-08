import React from "react";
import Link from "next/link";

// Fetch single food by ID
const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" },
  );
  const data = await res.json();
  return data.details;
};

const page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-500">
          Food not found!
        </h2>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {/* Back Button */}
      <Link
        href="/foods"
        className="mb-6 inline-flex items-center text-sm font-medium text-gray-500 hover:text-orange-600 transition-colors"
      >
        ← Back to all foods
      </Link>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
        {/* Food Image Section */}
        <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200">
          {food.foodImg ? (
            <img
              src={food.foodImg}
              alt={food.title}
              className="h-[400px] w-full object-cover"
            />
          ) : (
            <div className="h-[400px] w-full bg-gray-100 flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
        </div>

        {/* Food Details Section */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600">
              {food.category}
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            {food.title}
          </h1>

          <div className="mb-6 space-y-2 border-l-4 border-orange-500 pl-4">
            <p className="text-lg text-gray-600">
              Origin:{" "}
              <span className="font-semibold text-gray-900">{food.area}</span>
            </p>
            <p className="text-3xl font-black text-orange-600">${food.price}</p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Primary Action */}
            <button className="w-full rounded-2xl bg-gray-900 py-4 text-center font-bold text-white shadow-lg transition-all hover:bg-gray-800 active:scale-95">
              Order Now
            </button>

            {/* Video Link */}
            {food.video && (
              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white py-4 font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-red-600"
              >
                <span>Watch Recipe Video</span>
                <span className="text-red-500">▶</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
