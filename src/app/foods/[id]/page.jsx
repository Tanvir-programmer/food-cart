// app/foods/[id]/page.jsx
import React from "react";
// import Image from "next/image";

// Fetch single food by ID
const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }, // ensures fresh data every request
  );
  const data = await res.json();
  const result = data.details;
  return result;
  // matches API response
};

const page = async ({ params }) => {
  const { id } = await params; // unwrap dynamic param
  const food = await getSingleFood(id);

  // Handle missing food
  if (!food) return <h2>Food not found!</h2>;

  return (
    <div className="max-w-3xl mx-auto p-5">
      {/* Food Image */}
      {food.foodImg ? (
        <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md mb-5">
          <img
            src={food.foodImg}
            alt={food.title || "Food Image"}
            fill
            className="object-cover"
          />
        </div>
      ) : null}

      {/* Food Info */}
      <h1 className="text-3xl font-bold mb-2">{food.title}</h1>
      <p className="text-gray-600 mb-1">
        Category: <span className="font-semibold">{food.category}</span>
      </p>
      <p className="text-gray-600 mb-1">
        Area: <span className="font-semibold">{food.area}</span>
      </p>
      <p className="text-orange-500 font-bold text-xl mb-3">${food.price}</p>

      {/* Video */}
      {food.video && (
        <a
          href={food.video}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Watch Recipe Video
        </a>
      )}
    </div>
  );
};

export default page;
