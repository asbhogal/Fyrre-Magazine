import { Skeleton } from "../ui/skeleton";

export default function PodcastCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_auto] justify-between md:items-center gap-2 md:gap-0">
      <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto] md:items-center gap-2 md:gap-16">
        <Skeleton className="bg-[#a1a1a1] h-5 w-5 rounded-none"></Skeleton>
        <Skeleton className="bg-[#a1a1a1] h-60 w-60 rounded-none"></Skeleton>
        <Skeleton className="bg-[#a1a1a1] h-7 w-96 rounded-none"></Skeleton>
      </div>
      <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-2">
        <Skeleton className="bg-[#a1a1a1] h-5 w-28 rounded-none"></Skeleton>
        <Skeleton className="bg-[#a1a1a1] h-5 w-20 rounded-none"></Skeleton>
        <div className="flex gap-2">
          <Skeleton className="bg-[#a1a1a1] h-5 w-12 rounded-none"></Skeleton>
          <Skeleton className="bg-[#a1a1a1] h-5 w-5 rounded-none"></Skeleton>
        </div>
      </div>
    </div>
  );
}
