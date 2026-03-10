import React from "react";
import ReviewCardSkeleton from "../components/skeletons/ReviewsSkeleton";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(12)].map((_, index) => (
        <ReviewCardSkeleton key={index}></ReviewCardSkeleton>
      ))}
    </div>
  );
};

export default loading;
