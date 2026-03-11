import React from "react";
import Title from "../components/Title";
import FoodCard from "../components/cards/FoodCard";
import CardItems from "../components/CardItems";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
    { cache: "no-store" },
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};

const Food = async () => {
  const foods = await getFoods();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-6 p-4">
      {/* LEFT SIDE (Foods) */}
      <div className="flex-1">
        <Title>
          Total <span className="text-yellow-600">{foods.length}</span> Found
        </Title>

        <div className="m-auto border-b border-2 border-amber-900 text-2xl w-75"></div>

        {/* Responsive Grid */}
        <div className="grid my-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE (Cart) */}
      <div className="lg:w-[200px] w-full lg:min-h-screen border rounded-lg p-4 shadow-md bg-white">
        <h2 className="text-lg font-bold mb-4">🛒 Cart</h2>
        <hr />
        <div className="my-2">
          {" "}
          <CardItems></CardItems>
        </div>
        {/* <p className="text-sm my-2 text-gray-500">No items added yet</p> */}
      </div>
    </div>
  );
};

export default Food;
