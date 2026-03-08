import React from "react";

const ReviewCard = ({ review }) => {
  // Format the date to a readable format
  const reviewDate = new Date(review.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      {/* Header: User Info & Rating */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={review.photo}
            alt={review.user}
            className="h-12 w-12 rounded-full border-2 border-orange-100 object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-900">{review.user}</h4>
            <p className="text-xs text-gray-400">{reviewDate}</p>
          </div>
        </div>
        
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`text-lg ${i < review.rating ? "text-yellow-400" : "text-gray-200"}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review Content */}
      <div className="relative">
        <span className="absolute -top-2 -left-2 text-4xl text-gray-100">"</span>
        <p className="relative z-10 text-sm leading-relaxed text-gray-600">
          {review.review}
        </p>
      </div>

      {/* Footer: Likes & Interaction */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-50 pt-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <button className="flex items-center gap-1 transition-colors hover:text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.708a2 2 0 011.94 2.515l-1.42 5.323a2 2 0 01-1.94 1.477H4.5a1 1 0 01-1-1V9.414a1 1 0 01.293-.707L10 3l1.5 1.5L10 10h4z" />
            </svg>
            <span>{review.likes.length} Likes</span>
          </button>
        </div>
        
        <button className="text-xs font-semibold text-orange-600 hover:underline">
          Report
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;