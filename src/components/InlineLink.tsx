import Link from "next/link";

const InlineLink = (props: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={props.href}
      className="z-10 group items-center justify-center w-max border-b border-b-neutral-900 dark:border-b-neutral-100 hover:opacity-75 transition-all ease-in-out duration-100"
    >
      {props.children}
    </Link>
  );
};

export default InlineLink;
