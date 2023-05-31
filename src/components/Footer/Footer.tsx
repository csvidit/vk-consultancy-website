import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center self-center w-screen bottom-0 font-extralight">
      <footer className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 lg:items-center lg:justify-between self-end p-4 items-end bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30 w-full text-neutral-900 dark:text-neutral-100 overflow-hidden">
        <div className="flex flex-row space-x-2 items-center">
          <p className="">&copy; 2023</p>
          <h2 className="">VIDIT KHANDELWAL</h2>
        </div>
        <div className="grid grid-cols-2 gap-5 justify-items-end lg:flex lg:flex-row lg:space-x-5 lg:items-end lg:flex-wrap text-xs">
          <FooterLink href="https://linkedin.com/in/viditkhandelwal">
            LINKEDIN
          </FooterLink>
          <FooterLink href="https://read.cv/viditkhandelwal">
            READ.CV
          </FooterLink>
          <FooterLink href="https://github.com/csvidit">
            GITHUB
          </FooterLink>
          <FooterLink href="https://viditkhandelwal.com">
            VIDITKHANDELWAL.COM
          </FooterLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

{
  /* <Link
  className="flex flex-row space-x-2 items-center"
  href="https://linkedin.com/in/viditkhandelwal"
>
  <div>LINKEDIN</div>
  <HiArrowUpRight />
</Link>; */
}
