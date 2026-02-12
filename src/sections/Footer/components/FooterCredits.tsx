export type FooterCreditsProps = {
  variant: string;
  primaryText: string;
  secondaryText?: string;
  linkUrl?: string;
  linkText?: string;
  showBreak?: boolean;
  breakClassName?: string;
};

export const FooterCredits = (props: FooterCreditsProps) => {
  if (props.variant === "copyright") {
    return (
      <div
        className={`text-xs box-border caret-transparent leading-3 uppercase font-aeonik_mono md:order-none md:mt-20 ${props.variant}`}
      >
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0">
          {props.primaryText}
        </span>
        {props.secondaryText && (
          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0">
            {props.secondaryText}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`text-xs box-border caret-transparent leading-3 uppercase font-aeonik_mono md:order-none md:mt-20 ${props.variant}`}
    >
      {props.primaryText} /{" "}
      {props.showBreak && (
        <br
          className={
            props.breakClassName ||
            "box-border caret-transparent inline md:hidden"
          }
        />
      )}
      {props.linkUrl && props.linkText && (
        <a
          href={props.linkUrl}
          className="relative box-border caret-transparent inline-block rounded-sm after:md:accent-auto after:md:bg-zinc-500 after:md:box-border after:md:caret-transparent after:md:text-zinc-500 after:md:block after:md:text-xs after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-3 after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono"
        >
          {props.linkText}
        </a>
      )}
    </div>
  );
};
