export type FooterColumnProps = {
  columnVariant: string;
  links: Array<{
    href: string;
    text: string;
    linkVariant: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <ul
      className={`box-border caret-transparent col-end-[span_3] list-[''] pl-0 md:col-end-[span_2] md:mt-8 ${props.columnVariant}`}
    >
      {props.links.map((link, index) => (
        <li key={index} className="box-border caret-transparent flex">
          <a href={link.href} className={link.linkVariant}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
