import { Skeleton } from "../ui/skeleton";
import SkeletonCard from "./SkeletonCard";

export default function Loading() {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-col gap-12 py-10 max-w-[95rem] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <Skeleton className="bg-[#a1a1a1] rounded-none box h-[10.625rem]"></Skeleton>
          <div className="flex flex-col gap-0.5 justify-between">
            <Skeleton className="bg-[#a1a1a1] w-full h-5 rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] w-full h-5 rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] w-full h-5 rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] w-full h-5 rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] w-full h-5 rounded-none"></Skeleton>
            <div className="flex justify-between sm:items-center gap-2 mt-2">
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="flex gap-2">
                  <Skeleton className="bg-[#a1a1a1] h-6 w-10 rounded-none" />
                  <Skeleton className="bg-[#a1a1a1] h-6 w-24 rounded-none" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="bg-[#a1a1a1] h-6 w-10 rounded-none" />
                  <Skeleton className="bg-[#a1a1a1] h-6 w-24 rounded-none" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="bg-[#a1a1a1] h-6 w-10 rounded-none" />
                  <Skeleton className="bg-[#a1a1a1] h-6 w-24 rounded-none" />
                </div>
              </div>
              <div className="flex justify-end">
                <Skeleton className="bg-white h-[2.625rem] w-[3.5rem] border border-[#a1a1a1] rounded-full flex items-center justify-center">
                  <Skeleton className="bg-[#a1a1a1] h-6 w-8 rounded-none" />
                </Skeleton>
              </div>
            </div>
          </div>
        </div>
        <Skeleton className="bg-[#a1a1a1] min-h-[10vh] sm:min-h-[30vh] lg:min-h-[50vh] w-full rounded-none"></Skeleton>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-24">
        <div className="lg:w-3/4">
          <div className="grid sm:gap-12">
            <SkeletonCard />
            <Skeleton className="bg-[#a1a1a1] w-full h-0.5 rounded-none"></Skeleton>
            <SkeletonCard />
            <Skeleton className="bg-[#a1a1a1] w-full h-0.5 rounded-none"></Skeleton>
            <SkeletonCard />
            <Skeleton className="bg-[#a1a1a1] w-full h-0.5 rounded-none"></Skeleton>
            <SkeletonCard />
            <Skeleton className="bg-[#a1a1a1] w-full h-0.5 rounded-none"></Skeleton>
            <SkeletonCard />
            <Skeleton className="bg-[#a1a1a1] w-full h-0.5 rounded-none"></Skeleton>
            <SkeletonCard />
          </div>
        </div>
        <Skeleton className="bg-[#a1a1a1] rounded-none lg:w-1/4"></Skeleton>
      </div>
    </div>
  );
}
