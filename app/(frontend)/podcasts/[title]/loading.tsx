import SkeletonCard from "@/components/LatestPodcasts/SkeletonCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-[95rem] w-full mx-auto px-4 pb-12 md:pt-8 sm:pt-4 xs:pt-2 md:pb-4 sm:pb-2 xs:pb-2">
      <div className="flex items-center justify-between gap-20 md:gap-0 py-4 md:pt-8 md:pb-24">
        <div className="flex gap-2">
          <Skeleton className="bg-[#a1a1a1] h-[1.5625rem] w-[1.5625rem] rounded-none"></Skeleton>
          <Skeleton className="bg-[#a1a1a1] h-[1.5625rem] w-[5.625rem] rounded-none"></Skeleton>
        </div>
        <Skeleton className="bg-[#a1a1a1] h-7 w-[9.875rem] rounded-none"></Skeleton>
      </div>

      <div className="max-w-[75rem] w-full mx-auto flex flex-col md:flex-row flex-wrap gap-24">
        <div className="flex flex-col lg:w-1/4">
          <Skeleton className="bg-[#a1a1a1] h-[18.75rem] max-w-[18.75rem] w-full rounded-none"></Skeleton>
          <div className="flex justify-between mt-8 pb-12">
            <Skeleton className="bg-[#a1a1a1] h-[1.75rem] w-[5.6875rem] rounded-none"></Skeleton>
            <div className="flex gap-3">
              <Skeleton className="bg-[#a1a1a1] h-6 w-6 rounded-full"></Skeleton>
              <Skeleton className="bg-[#a1a1a1] h-6 w-6 rounded-full"></Skeleton>
              <Skeleton className="bg-[#a1a1a1] h-6 w-6 rounded-full"></Skeleton>
            </div>
          </div>
          <Skeleton className="bg-[#a1a1a1] h-0.5 w-full"></Skeleton>
          <div className="flex flex-col gap-4 pt-8">
            <div className="flex flex-wrap justify-between">
              <Skeleton className="bg-[#a1a1a1] h-6 w-10 rounded-none"></Skeleton>
              <Skeleton className="bg-[#a1a1a1] h-6 w-24 rounded-none"></Skeleton>
            </div>
            <div className="flex flex-wrap justify-between">
              <Skeleton className="bg-[#a1a1a1] h-6 w-10 rounded-none"></Skeleton>
              <Skeleton className="bg-[#a1a1a1] h-6 w-24 rounded-none"></Skeleton>
            </div>
            <div className="flex flex-wrap justify-between">
              <Skeleton className="bg-[#a1a1a1] h-6 w-10 rounded-none"></Skeleton>
              <Skeleton className="bg-[#a1a1a1] h-6 w-24 rounded-none"></Skeleton>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-full">
          <Skeleton className="bg-[#a1a1a1] h-6 w-28 mb-8 rounded-none"></Skeleton>
          <div className="flex flex-col gap-2 mb-12">
            <Skeleton className="bg-[#a1a1a1] h-20 lg:h-32 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-20 lg:h-32 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-20 lg:h-32 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-20 lg:h-32 w-full rounded-none"></Skeleton>
          </div>
          <div className="flex flex-col gap-2 pt-8 pb-16">
            <Skeleton className="bg-[#a1a1a1] h-6 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-6 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-6 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-6 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-6 w-full rounded-none"></Skeleton>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
          </div>
          <Skeleton className="bg-[#a1a1a1] h-0.5 mt-6 mb-12 w-full"></Skeleton>
          <div className="flex flex-col gap-2 pt-8 pb-16">
            <Skeleton className="bg-[#a1a1a1] h-12 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-12 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-12 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-12 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-12 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 mt-6 w-[25%] rounded-none"></Skeleton>
          </div>
          <Skeleton className="bg-[#a1a1a1] h-0.5 mb-6 mt-12 w-full"></Skeleton>
          <div className="flex flex-col gap-2">
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] h-4 w-full rounded-none"></Skeleton>
          </div>
        </div>
      </div>
      <div className="pb-12 md:pb-48">
        <Skeleton className="bg-[#a1a1a1] h-0.5 mt-[9.5rem] mb-12 md:mb-24 w-full"></Skeleton>
        <Skeleton className="bg-[#a1a1a1] h-16 md:h-28 mt-12 mb-12 md:mb-24 w-full rounded-none"></Skeleton>
        <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-3 max-w-[95rem] w-full mx-auto">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}
