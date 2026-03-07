import React from "react";
import Title from "../components/Title";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
    { cache: 'no-store' } // Optional: ensures you get fresh random data every time
  );
  const data = await res.json();
  return data.foods || [];
};

const Food = async () => {
  const foods = await getFoods();

  return (
    <div className="p-4">
      {/* 1. Show the count in the Title */}
      <Title>Total {foods.length} Found</Title>
      
      {/* 2. Map the list outside the Title */}
      <ul className="mt-4 space-y-2">
        {foods.map((food) => (
          <li key={food._id || food.id} className="list-disc ml-5">
            {food.name || food.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Food;