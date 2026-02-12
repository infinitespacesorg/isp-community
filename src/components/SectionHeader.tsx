import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export type SectionHeaderProps = {
  title: string;
  linkHref: string;
  linkText: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <header className="items-center box-border caret-transparent flex flex-wrap justify-between mb-3.5 md:flex-nowrap md:mb-10">
      <h2 className="text-4xl font-black box-border caret-transparent tracking-[-0.36px] leading-[35.28px] md:text-[44.8px] md:tracking-[-0.48px] md:leading-[43.904px]">
        {props.title}
      </h2>
      <div className="items-end box-border caret-transparent flex grow flex-wrap justify-end md:[align-items:normal] md:grow-0">
        <Link
          to={props.linkHref}
          className="text-sm items-center box-border caret-transparent flex leading-[14px] uppercase rounded-bl rounded-br rounded-tl rounded-tr font-aeonik_mono"
        >
          <span className="box-border caret-transparent block">
            {props.linkText}
          </span>
          <span className="box-border caret-transparent flex">
            <ArrowRight className="h-5 w-5 md:h-5 md:w-5" />
          </span>
        </Link>
      </div>
    </header>
  );
};
