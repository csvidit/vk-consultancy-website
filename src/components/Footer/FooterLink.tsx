import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { UrlObject } from "url";

const FooterLink = (props: {
  href: string | UrlObject;
  children: React.ReactNode;
}) => {
  return (
    <Link
      className="relative flex flex-col transition-all duration-200 ease-in-out h-[1rem] items-center overflow-hidden group"
      href={props.href}
    >
      <div className="flex flex-row space-x-1 items-center opacity-100 -translate-y-0 group-hover:-translate-y-full group-hover:opacity-0 duration-300 ease-in-out">
        <div>{props.children}</div>
        <HiArrowUpRight />
      </div>
      <div className="flex flex-row space-x-1 items-center opacity-0 -translate-y-0 group-hover:-translate-y-full group-hover:opacity-100 duration-300 ease-in-out">
        <div>{props.children}</div>
        <HiArrowUpRight />
      </div>
    </Link>
  );
};

export default FooterLink;
