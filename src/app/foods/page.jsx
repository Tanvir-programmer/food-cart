// app/foods/page.jsx
import React from "react";
import Title from "@/app/components/Title";
import FoodCard from "@/app/components/cards/FoodCard";
import CardItems from "@/app/components/CardItems";
import InputSearch from "@/app/components/InputSearch";

// Fetch function (Server-side)
const getFoods = async (search = "") => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { cache: "no-store" }, // always fresh
  );

  const data = await res.json();

  // optional: simulate loading
  await new Promise((resolve) => setTimeout(resolve, 500));

  return data.foods || [];
};
export const metadata = {
  title: "food page",
  description: "You can see all food",
};
// Server Component
const Food = async ({ searchParams }) => {
  // ✅ unwrap searchParams
  const params = await searchParams;
  const { search = "" } = params;

  const foods = await getFoods(search);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-6 p-4">
      {/* LEFT SIDE (Foods Section) */}
      <div className="flex-1">
        {/* Title + Search */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <Title>
              Total <span className="text-yellow-600">{foods.length}</span>{" "}
              Found
            </Title>
            <div className="border-b border-2 border-amber-900 text-2xl w-60 mt-2"></div>
          </div>

          <InputSearch />
        </div>

        {/* Foods Grid */}
        <div className="grid my-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE CART */}
      <div className="lg:w-[200px] w-full lg:min-h-screen border rounded-lg p-4 shadow-md bg-white">
        <h2 className="text-lg font-bold mb-4">🛒 Cart</h2>
        <hr />
        <div className="my-2">
          <CardItems />
        </div>
      </div>
    </div>
  );
};

export default Food;
