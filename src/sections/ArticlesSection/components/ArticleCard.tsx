export type ArticleCardProps = {
  videoSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageSizes?: string;
  href: string;
  title: string;
  tags: string[];
  date: string;
  readTime: string;
  variant?: string;
};

export const ArticleCard = (props: ArticleCardProps) => {
  return (
    <li
      className={`box-border caret-transparent block shrink-0 snap-start text-nowrap align-top w-[67%] md:snap-align-none md:w-[386.667px] ${props.variant || "mr-4 md:mr-6"}`}
    >
      <div className="relative content-between box-border caret-transparent flex flex-wrap text-nowrap w-full">
        <div className="relative text-sm box-border caret-transparent flex justify-between leading-[21px] text-nowrap w-full md:text-lg md:leading-[27px]">
          <div className="relative text-sm aspect-[16_/_10] box-border caret-transparent leading-[21px] text-nowrap w-full md:text-lg md:leading-[27px]">
            <div className="absolute text-sm box-border caret-transparent h-full leading-[21px] text-nowrap w-full z-[1] overflow-hidden rounded-2xl right-0 top-0 md:text-lg md:leading-[27px]">
              {props.videoSrc ? (
                <video
                  src={props.videoSrc}
                  preload="metadata"
                  playsInline
                  muted
                  loop
                  className="absolute text-sm box-border caret-transparent h-full leading-[21px] max-w-full object-cover text-nowrap w-full z-[1] md:text-lg md:leading-[27px]"
                />
              ) : (
                <img
                  sizes={props.imageSizes}
                  src={props.imageSrc}
                  alt={props.imageAlt}
                  className="absolute text-sm aspect-[auto_1232_/_1589] box-border caret-transparent h-full leading-[21px] max-w-full object-cover object-[45.39%_41.67%] text-nowrap w-full z-[1] left-0 top-0 md:text-lg md:leading-[27px]"
                />
              )}
            </div>
            <div className="absolute text-sm bg-neutral-950 box-border caret-transparent hidden h-full leading-[21px] text-nowrap w-full right-0 top-0 md:text-lg md:leading-[27px]"></div>
          </div>
        </div>
        <div className="box-border caret-transparent flex flex-wrap text-nowrap w-full mt-2">
          <h3 className="text-2xl font-extrabold box-border caret-transparent leading-[26.4px] text-nowrap w-full mt-px md:text-[32px] md:leading-[35.2px]">
            <a
              href={props.href}
              title={props.title}
              className="text-base font-semibold box-border caret-transparent flow-root leading-[19.2px] text-ellipsis overflow-hidden md:text-[23.04px] md:font-normal md:leading-[27.648px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-950 before:block before:text-base before:not-italic before:font-semibold before:tracking-[0.18px] before:leading-[19.2px] before:list-outside before:list-[''] before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:z-[1] before:border-separate before:inset-0 before:font-aeonik before:md:text-[23.04px] before:md:font-normal before:md:leading-[27.648px]"
            >
              {props.title}
            </a>
          </h3>
          <ul className="relative box-border caret-transparent gap-x-1 flex gap-y-1 text-nowrap w-full overflow-hidden mt-1 pl-0 after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgb(255,255,255)_75%)] after:box-border after:caret-transparent after:text-neutral-950 after:block after:text-lg after:not-italic after:font-normal after:h-full after:tracking-[0.18px] after:leading-[27px] after:list-outside after:list-[''] after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:text-nowrap after:visible after:w-[60px] after:border-separate after:right-0 after:top-0 after:font-aeonik">
            {props.tags.map((tag, index) => (
              <li
                key={index}
                className="text-neutral-500 text-[10px] items-center box-border caret-transparent gap-x-1.5 flex shrink-0 justify-center leading-[15px] gap-y-1.5 uppercase text-nowrap border border-stone-300 overflow-hidden mt-1 px-3 py-1 rounded-[14px] border-solid"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="text-neutral-500 text-xs box-border caret-transparent tracking-[0.21px] leading-[18px] text-nowrap w-full mt-3">
            {props.date} — {props.readTime} min read
          </div>
        </div>
      </div>
    </li>
  );
};
