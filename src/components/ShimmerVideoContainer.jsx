import ShimmerVideoCard from "./ShimmerVideoCard";

export const ShimmerVideoContainer = () => {
  return (
    <div className="flex flex-wrap gap-3 px-10">
      {Array(12)
        .fill("")
        .map(() => {
          return (
            <div className="">
              <ShimmerVideoCard />;
            </div>
          );
        })}
    </div>
  );
};
