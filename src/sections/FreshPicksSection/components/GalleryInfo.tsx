import { ChevronLeft, ChevronRight } from "lucide-react";

export const GalleryInfo = () => {
  return (
    <div className="relative items-start box-border caret-transparent gap-x-4 grid grid-cols-[repeat(6,1fr)] justify-between w-full mt-[15px] mx-auto md:gap-x-6 md:grid-cols-[repeat(12,1fr)] md:justify-normal md:mt-10">
      <div className="relative box-border caret-transparent col-end-[span_4] col-start-1 min-h-[109px] md:col-end-[span_10] md:min-h-[auto]">
        <div className="absolute items-center box-border caret-transparent gap-x-[normal] block grid-cols-none w-full mx-0 left-0 top-0 md:gap-x-6 md:grid md:grid-cols-[repeat(10,1fr)] md:mx-auto">
          <div className="items-center box-border caret-transparent flex col-end-auto col-start-auto min-h-0 min-w-0 md:col-end-[span_3] md:col-start-1 md:min-h-[auto] md:min-w-[auto]">
            <ul className="relative items-start box-border caret-transparent flex flex-wrap list-[''] w-full pl-0">
              <li className="relative text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex shrink-0 h-9 justify-center leading-[14px] gap-y-1.5 uppercase w-9 z-[2] rounded-[50%] border-2 border-solid border-white font-aeonik_mono after:accent-auto after:bg-neutral-950 after:box-border after:caret-transparent after:text-white after:block after:text-sm after:not-italic after:font-normal after:h-[calc(100%_-_2px)] after:tracking-[0.18px] after:leading-[14px] after:list-outside after:list-[''] after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:uppercase after:visible after:w-[calc(100%_-_2px)] after:z-0 after:rounded-[50%] after:border-separate after:left-px after:top-px after:font-aeonik_mono">
                <a
                  href="#"
                  title="User 1"
                  className="absolute text-neutral-950 box-border caret-transparent block h-full w-full rounded-[50%] left-0 top-0"
                >
                  <div className="absolute box-border caret-transparent h-full w-full z-[1] overflow-hidden rounded-[50%] left-0 top-0">
                    <img
                      sizes="72px"
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
                      alt="User avatar"
                      className="absolute aspect-[auto_2250_/_2250] box-border caret-transparent h-full max-h-full max-w-full object-cover translate-x-[-50.0%] translate-y-[-50.0%] w-full left-2/4 top-2/4"
                    />
                  </div>
                </a>
              </li>
              <li className="relative text-white text-sm items-center box-border caret-transparent gap-x-1.5 flex shrink-0 h-9 justify-center leading-[14px] gap-y-1.5 uppercase w-9 z-[1] -ml-2 rounded-[50%] border-2 border-solid border-white font-aeonik_mono after:accent-auto after:bg-neutral-950 after:box-border after:caret-transparent after:text-white after:block after:text-sm after:not-italic after:font-normal after:h-[calc(100%_-_2px)] after:tracking-[0.18px] after:leading-[14px] after:list-outside after:list-[''] after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:uppercase after:visible after:w-[calc(100%_-_2px)] after:z-0 after:rounded-[50%] after:border-separate after:left-px after:top-px after:font-aeonik_mono">
                <a
                  href="#"
                  title="User 2"
                  className="absolute text-neutral-950 box-border caret-transparent block h-full w-full rounded-[50%] left-0 top-0"
                >
                  <div className="absolute box-border caret-transparent h-full w-full z-[1] overflow-hidden rounded-[50%] left-0 top-0">
                    <img
                      sizes="72px"
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=jordan"
                      alt="User avatar"
                      className="absolute aspect-[auto_1080_/_1080] box-border caret-transparent h-full max-h-full max-w-full object-cover translate-x-[-50.0%] translate-y-[-50.0%] w-full left-2/4 top-2/4"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="content-center box-border caret-transparent gap-x-3 flex flex-wrap col-end-auto col-start-auto min-h-0 min-w-0 gap-y-3 mt-3 md:flex-nowrap md:col-end-[span_7] md:col-start-4 md:min-h-[auto] md:min-w-[auto] md:mt-0">
            <div className="text-neutral-950 text-xs items-center bg-transparent box-border caret-transparent gap-x-1.5 flex shrink-0 justify-center leading-[18px] order-2 gap-y-1.5 uppercase border border-stone-300 overflow-hidden px-3 py-1 rounded-[14px] border-solid md:text-white md:bg-neutral-950 md:order-none md:border-neutral-950">
              project
            </div>
            <a
              href="#"
              title="Featured Project"
              className="text-xl font-extrabold items-center box-border caret-transparent flex leading-5 order-1 w-full md:order-none md:w-auto"
            >
              Featured Project
            </a>
          </div>
        </div>
        <div className="absolute items-center box-border caret-transparent gap-x-[normal] block grid-cols-none pointer-events-none w-full mx-0 left-0 top-0 md:gap-x-6 md:grid md:grid-cols-[repeat(10,1fr)] md:mx-auto"></div>
        <div className="absolute items-center box-border caret-transparent gap-x-[normal] block grid-cols-none pointer-events-none w-full mx-0 left-0 top-0 md:gap-x-6 md:grid md:grid-cols-[repeat(10,1fr)] md:mx-auto"></div>
        <div className="absolute items-center box-border caret-transparent gap-x-[normal] block grid-cols-none pointer-events-none w-full mx-0 left-0 top-0 md:gap-x-6 md:grid md:grid-cols-[repeat(10,1fr)] md:mx-auto"></div>
      </div>
      <div className="box-border caret-transparent col-end-[span_2] col-start-5 md:col-start-11">
        <div className="box-border caret-transparent flex justify-end">
          <button
            aria-label="Previous project"
            className="relative text-sm items-center bg-transparent caret-transparent gap-x-1.5 flex shrink-0 h-9 justify-center leading-[14px] gap-y-1.5 text-center uppercase w-9 border border-neutral-950 mr-3 p-0 rounded-[50%] border-solid font-aeonik_mono hover:bg-violet-600 hover:border-violet-600"
          >
            <ChevronLeft className="h-5 w-5 z-[2]" />
          </button>
          <button
            aria-label="Next project"
            className="relative text-sm items-center bg-transparent caret-transparent gap-x-1.5 flex shrink-0 h-9 justify-center leading-[14px] gap-y-1.5 text-center uppercase w-9 border border-neutral-950 p-0 rounded-[50%] border-solid font-aeonik_mono hover:bg-violet-600 hover:border-violet-600"
          >
            <ChevronRight className="h-5 w-5 z-[2]" />
          </button>
        </div>
      </div>
    </div>
  );
};
