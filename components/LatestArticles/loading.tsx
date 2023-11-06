import { Skeleton } from "../ui/skeleton";

export default function Loading() {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-col gap-12 py-10 max-w-[95rem] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <Skeleton className="bg-[#a1a1a1] rounded-none box h-[10.625rem]"></Skeleton>
          <div className="flex flex-col gap-0.5">
            <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
            <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
            <div className="flex justify-between sm:items-center gap-2">
              <div className="flex gap-2 sm:gap-6">
                <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
                <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
                <Skeleton className="bg-[#a1a1a1] w-full h-6 rounded-none"></Skeleton>
              </div>
              <div className="bg-[#a1a1a1] rounded-full w-fit">
                <Skeleton></Skeleton>
              </div>
            </div>
          </div>
        </div>
        <Skeleton className="bg-[#a1a1a1] min-h-[10vh] sm:min-h-[30vh] lg:min-h-[50vh] w-full rounded-none"></Skeleton>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-24">
        <div className="lg:w-3/4">
          <div className="grid sm:gap-12">
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
            <Skeleton className="bg-[#a1a1a1] w-full h-0.5 rounded-none"></Skeleton>
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
            <Skeleton className="bg-[#a1a1a1] w-full h-0.5 rounded-none"></Skeleton>
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
            <Skeleton className="bg-[#a1a1a1] w-full h-0.5 rounded-none"></Skeleton>
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
            <Skeleton className="bg-[#a1a1a1] w-full h-0.5 rounded-none"></Skeleton>
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
            <Skeleton className="bg-[#a1a1a1] w-full h-0.5 rounded-none"></Skeleton>
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
          </div>
        </div>
        <Skeleton className="bg-[#a1a1a1] rounded-none lg:w-1/4"></Skeleton>
      </div>
    </div>
  );
}
