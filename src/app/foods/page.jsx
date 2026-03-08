import React from "react";
import Title from "../components/Title";
import FoodCard from "../components/cards/FoodCard";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
    { cache: "no-store" }, // Optional: ensures you get fresh random data every time
  );
  const data = await res.json();
   await new Promise((resolve)=>setTimeout(resolve), 3000)
  return data.foods || [];
};

const Food = async () => {
  const foods = await getFoods();

  return (
    <div className="p-4">
      {/* 1. Show the count in the Title */}
      <Title>
        Total <span className="text-yellow-600">{foods.length}</span> Found
      </Title>
      <div className="m-auto border-b border-2 border-amber-900 text-2xl w-75"></div>
      <div className="grid my-5 grid-cols-3 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Food;
