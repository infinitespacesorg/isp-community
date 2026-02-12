export const StackedImages = () => {
  return (
    <div className="relative aspect-video box-border caret-transparent w-full">
      <div className="absolute bg-white box-border caret-transparent h-full w-full z-[3] overflow-hidden rounded-[3.75px] left-0 right-auto top-0 md:rounded-[12.8px] md:left-auto md:right-0">
        <a
          href="#"
          title="Spatial Canvas"
          className="absolute text-blue-700 box-border caret-transparent block grayscale-0 h-full w-full left-0 top-0"
        >
          <img
            src="https://placehold.co/800x500/1a1a1a/ffffff?text=Spatial+Canvas"
            alt="Spatial Canvas"
            className="absolute box-border caret-transparent h-full max-w-full object-cover pointer-events-none w-full left-0 top-0"
          />
        </a>
      </div>
      <div className="absolute bg-white box-border caret-transparent h-full translate-x-3 translate-y-3 w-full z-[2] overflow-hidden rounded-[3.75px] left-0 right-auto top-0 md:-translate-x-6 md:translate-y-6 md:rounded-[12.8px] md:left-auto md:right-0">
        <a
          href="#"
          title="Media Fabric"
          className="absolute text-blue-700 box-border caret-transparent block grayscale-[0.25] h-full opacity-75 w-full left-0 top-0 md:opacity-15"
        >
          <img
            src="https://placehold.co/800x500/4c1d95/ffffff?text=Media+Fabric"
            alt="Media Fabric"
            className="absolute bg-zinc-100 box-border caret-transparent h-full max-w-full object-cover pointer-events-none w-full left-0 top-0"
          />
        </a>
      </div>
      <div className="absolute bg-white box-border caret-transparent h-full translate-x-6 translate-y-6 w-full z-[1] overflow-hidden rounded-[3.75px] left-0 right-auto top-0 md:-translate-x-12 md:translate-y-12 md:rounded-[12.8px] md:left-auto md:right-0">
        <a
          href="#"
          title="Agent Playground"
          className="absolute text-blue-700 box-border caret-transparent block grayscale-[0.55] h-full opacity-50 w-full left-0 top-0 md:opacity-10"
        >
          <div className="absolute box-border caret-transparent h-full w-full overflow-hidden left-0 top-0">
            <img
              alt="Agent Playground"
              sizes="100vw"
              src="https://placehold.co/800x500/0a0a0a/ffffff?text=Agent+Playground"
              className="absolute aspect-[auto_1100_/_770] box-border caret-transparent h-full max-w-full object-cover pointer-events-none w-full left-0 top-0"
            />
          </div>
        </a>
      </div>
      <div className="absolute bg-white box-border caret-transparent h-full translate-x-9 translate-y-9 w-full z-0 overflow-hidden rounded-[3.75px] left-0 right-auto top-0 md:translate-x-[-72px] md:translate-y-[72px] md:rounded-[12.8px] md:left-auto md:right-0">
        <a
          href="#"
          title="World Editor"
          className="absolute text-blue-700 box-border caret-transparent block grayscale-[0.75] h-full opacity-25 w-full left-0 top-0 md:opacity-5"
        >
          <img
            src="https://placehold.co/800x500/3b0764/ffffff?text=World+Editor"
            alt="World Editor"
            className="absolute bg-zinc-100 box-border caret-transparent h-full max-w-full object-cover pointer-events-none w-full left-0 top-0"
          />
        </a>
      </div>
    </div>
  );
};
