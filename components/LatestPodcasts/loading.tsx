import SkeletonCard from "./SkeletonCard";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-3 max-w-[95rem] w-full mx-auto border border-black border-collapse">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
