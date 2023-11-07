import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard() {
  return (
    <Skeleton className="bg-white border border-[#a1a1a1] p-4 md:p-12 rounded-none">
      <Skeleton className="bg-[#a1a1a1] min-h-[25rem] rounded-none"></Skeleton>
      <div className="flex flex-col gap-2 pt-8 pb-12">
        <Skeleton className="bg-[#a1a1a1] h-10 w-full rounded-none"></Skeleton>
        <Skeleton className="bg-[#a1a1a1] h-10 w-full rounded-none"></Skeleton>
      </div>
      <div className="flex gap-2 w-[50%]">
        <Skeleton className="bg-[#a1a1a1] h-6 w-[50%] rounded-none"></Skeleton>
        <Skeleton className="bg-[#a1a1a1] h-6 w-[50%] rounded-none"></Skeleton>
      </div>
    </Skeleton>
  );
}
