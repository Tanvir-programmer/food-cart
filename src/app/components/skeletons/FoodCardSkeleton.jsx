const FoodCardSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      {/* Image Placeholder */}
      <div className="aspect-video bg-gray-200" />

      {/* Content Placeholder */}
      <div className="p-5">
        <div className="mb-6 flex justify-between">
          <div className="h-5 w-2/3 rounded-md bg-gray-200" />
          <div className="h-5 w-12 rounded-md bg-gray-200" />
        </div>

        {/* Buttons Placeholder */}
        <div className="flex gap-2">
          <div className="h-10 flex-1 rounded-xl bg-gray-200" />
          <div className="h-10 flex-1 rounded-xl bg-gray-200" />
        </div>
      </div>
    </div>
  );
};
export default FoodCardSkeleton;
