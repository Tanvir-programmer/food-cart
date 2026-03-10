"use client";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import ReviewCard from "../components/cards/ReviewCard";
import ReviewLoading from "../reviews/ReviewLoading";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []); // Fix: targeted the array
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <ReviewLoading></ReviewLoading>;

  return (
    <div className="p-4">
      <Title>
        Total <span className="text-yellow-600">{reviews.length}</span> Found
      </Title>
      <div className="m-auto border-b-2 border-amber-900 w-24 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
