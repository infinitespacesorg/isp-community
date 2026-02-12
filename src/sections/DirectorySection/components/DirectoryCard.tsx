import { MapPin } from "lucide-react";

export type DirectoryCardProps = {
  avatarSrc: string;
  avatarAlt: string;
  avatarClassName: string;
  badgeClassName: string;
  name: string;
  profileUrl: string;
  username: string;
  location: string;
  listItemClassName?: string;
};

export const DirectoryCard = (props: DirectoryCardProps) => {
  return (
    <li
      className={`box-border caret-transparent block shrink-0 snap-start text-nowrap align-top w-[67%] md:snap-align-none md:w-[222.4px] ${props.listItemClassName || ""}`}
    >
      <div className="relative content-between box-border caret-transparent flex flex-wrap text-nowrap w-full">
        <div className="relative text-sm box-border caret-transparent flex justify-between leading-[21px] text-nowrap w-full md:text-lg md:leading-[27px]">
          <div className="relative text-sm aspect-[3_/_4] box-border caret-transparent leading-[21px] text-nowrap w-full md:text-lg md:leading-[27px]">
            <div className="absolute text-sm box-border caret-transparent h-[96%] leading-[21px] text-nowrap w-[96%] z-[1] overflow-hidden rounded-[2%] right-0 top-0 md:text-lg md:leading-[27px]">
              <img
                sizes="20vw"
                src={props.avatarSrc}
                alt={props.avatarAlt}
                className={`absolute text-sm box-border caret-transparent h-full leading-[21px] max-w-full object-cover text-nowrap w-full z-[1] left-0 top-0 md:text-lg md:leading-[27px] ${props.avatarClassName}`}
              />
            </div>
            <div
              className={`absolute text-sm box-border caret-transparent h-full leading-[21px] text-nowrap w-full right-0 top-0 md:text-lg md:leading-[27px] ${props.badgeClassName}`}
            ></div>
          </div>
        </div>
        <div className="box-border caret-transparent flex flex-wrap text-nowrap w-full mt-2">
          <div className="items-center box-border caret-transparent flex text-nowrap">
            <div className="box-border caret-transparent text-nowrap ml-1.5">
              <div className="box-border caret-transparent text-nowrap">
                <h3 className="text-2xl font-extrabold box-border caret-transparent flex leading-6 text-nowrap md:text-[32px] md:leading-8">
                  <a
                    href={props.profileUrl}
                    className="text-2xl items-center box-border caret-transparent flex leading-6 text-nowrap md:text-[32px] md:leading-8 before:accent-auto before:box-border before:caret-transparent before:text-neutral-950 before:block before:text-2xl before:not-italic before:font-extrabold before:tracking-[0.18px] before:leading-6 before:list-outside before:list-[''] before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:text-nowrap before:visible before:z-[1] before:border-separate before:inset-0 before:font-aeonik before:md:text-[32px] before:md:leading-8"
                  >
                    <span className="text-base font-semibold box-border caret-transparent flow-root leading-[19.2px] text-ellipsis overflow-hidden md:text-[23.04px] md:font-normal md:leading-[27.648px]">
                      {props.name}
                    </span>
                  </a>
                </h3>
              </div>
              <div className="text-neutral-500 text-xs items-center box-border caret-transparent flex leading-3 text-nowrap mt-0.5">
                <div className="box-border caret-transparent tracking-[0.21px] leading-[18px] text-nowrap">
                  <a
                    href={props.profileUrl}
                    className="items-center box-border caret-transparent inline-flex text-nowrap before:accent-auto before:box-border before:caret-transparent before:text-neutral-500 before:block before:text-xs before:not-italic before:font-normal before:tracking-[0.21px] before:leading-[18px] before:list-outside before:list-[''] before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:text-nowrap before:visible before:z-[1] before:border-separate before:inset-0 before:font-aeonik"
                  >
                    @{props.username}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-neutral-500 text-xs items-center box-border caret-transparent flex tracking-[0.21px] leading-[18px] text-nowrap w-full ml-0.5 mt-2">
            <span className="box-border caret-transparent block text-nowrap mr-[5px]">
              <MapPin className="h-5 w-5 inline text-neutral-500" />
            </span>
            {props.location}
          </div>
        </div>
      </div>
    </li>
  );
};
