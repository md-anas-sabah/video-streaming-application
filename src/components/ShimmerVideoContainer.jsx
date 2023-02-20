import ShimmerVideoCard from "./ShimmerVideoCard";

export const ShimmerVideoContainer = () => {
  return (
    <div className="flex flex-wrap gap-3 px-10">
      {Array(12)
        .fill("")
        .map((index) => {
          return (
            <div className="">
              <ShimmerVideoCard key={index} />;
            </div>
          );
        })}
    </div>
  );
};
