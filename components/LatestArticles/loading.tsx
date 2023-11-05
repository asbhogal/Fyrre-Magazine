import { Skeleton } from "../ui/skeleton";

export default function Loading() {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-col gap-12 py-10 max-w-[95rem] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <Skeleton className="bg-[#a1a1a1] rounded-none box h-[240px]"></Skeleton>
          <Skeleton className="bg-[#a1a1a1] rounded-none box h-[240px]"></Skeleton>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-24">
        <div className="lg:w-3/4">
          <div className="grid gap-6 sm:gap-12">
            <Skeleton className="bg-[#a1a1a1] rounded-none box h-[240px]"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] rounded-none box h-[240px]"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] rounded-none box h-[240px]"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] rounded-none box h-[240px]"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] rounded-none box h-[240px]"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] rounded-none box h-[240px]"></Skeleton>
          </div>
        </div>
        <Skeleton className="rounded-none lg:w-1/4"></Skeleton>
      </div>
    </div>
  );
}
