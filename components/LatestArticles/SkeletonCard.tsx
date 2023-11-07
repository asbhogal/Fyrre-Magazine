import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="grid md:grid-cols-[0fr_1fr] gap-6 sm:gap-12">
      <Skeleton className="bg-[#a1a1a1] w-[15rem] h-[15rem] rounded-none"></Skeleton>
      <div className="flex flex-col justify-between">
        <Skeleton className="bg-[#a1a1a1] w-full h-10 rounded-none mb-3"></Skeleton>
        <div className="flex flex-col gap-2 mb-2 sm:mb-0">
          <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
          <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
          <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
          <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
        </div>
        <div className="flex flex-col w-[50%] sm:flex-row gap-2 sm:gap-6">
          <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
          <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
          <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
          <div className="w-full h-6">
            <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}
