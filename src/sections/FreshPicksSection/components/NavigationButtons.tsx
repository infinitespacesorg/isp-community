import { ChevronLeft, ChevronRight } from "lucide-react";

export const NavigationButtons = () => {
  return (
    <div className="box-border caret-transparent col-end-[span_2] col-start-5 md:col-start-11">
      <div className="box-border caret-transparent flex justify-end">
        <button
          aria-label="Previous project"
          className="relative text-sm items-center bg-transparent caret-transparent gap-x-1.5 flex shrink-0 h-9 justify-center leading-[14px] gap-y-1.5 text-center uppercase w-9 border border-neutral-950 mr-3 p-0 rounded-[50%] border-solid font-aeonik-mono hover:bg-violet-600 hover:border-violet-600"
        >
          <ChevronLeft className="h-5 w-5 z-[2]" />
        </button>
        <button
          aria-label="Next project"
          className="relative text-sm items-center bg-transparent caret-transparent gap-x-1.5 flex shrink-0 h-9 justify-center leading-[14px] gap-y-1.5 text-center uppercase w-9 border border-neutral-950 p-0 rounded-[50%] border-solid font-aeonik-mono hover:bg-violet-600 hover:border-violet-600"
        >
          <ChevronRight className="h-5 w-5 z-[2]" />
        </button>
      </div>
    </div>
  );
};
