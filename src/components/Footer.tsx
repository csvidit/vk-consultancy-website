import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center self-center w-screen bottom-0 font-extralight">
      <footer className="flex flex-col space-y-2 self-end p-4 items-end bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30 w-full text-neutral-900 dark:text-neutral-100 overflow-hidden">
        <div className="flex flex-row space-x-2 items-center">
          <p className="">&copy; 2023</p>
          <h2 className="text-lg lg:text-2xl">VIDIT KHANDELWAL</h2>
        </div>
        <div className="text-xs">
          
        </div>
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-center text-xs">
          <Link
            className="flex flex-row space-x-2 items-center"
            href="https://linkedin.com/in/viditkhandelwal"
          >
            <div>LINKEDIN</div>
            <HiArrowUpRight />
          </Link>
          <Link
            className="flex flex-row space-x-2 items-center"
            href="https://read.cv/viditkhandelwal"
          >
            <div>READ.CV</div>
            <HiArrowUpRight />
          </Link>
          <Link
            className="flex flex-row space-x-2 items-center"
            href="https://www.upwork.com/freelancers/~01cae86bc9303aa9bc"
          >
            <div>UPWORK</div>
            <HiArrowUpRight />
          </Link>
          <Link
            className="flex flex-row space-x-2 items-center"
            href="https://github.com/csvidit"
          >
            <div>GITHUB</div>
            <HiArrowUpRight />
          </Link>
        </div>
        <div className="">
          
        </div>
        {/* <div className="flex flex-row space-x-1 items-center text-neutral-900 dark:text-neutral-100 font-light">
          <Link href="https://github.com/csvidit/domains-2">
            check out this project&apos;s repository
          </Link>
          <HiArrowUpRight />
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
