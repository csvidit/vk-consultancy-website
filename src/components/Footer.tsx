import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center self-center w-screen bottom-0 font-extralight">
      <footer className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 lg:items-center lg:justify-between self-end p-4 items-end bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30 w-full text-neutral-900 dark:text-neutral-100 overflow-hidden">
        <div className="flex flex-row space-x-2 items-center">
          <p className="">&copy; 2023</p>
          <h2 className="">VIDIT KHANDELWAL</h2>
        </div>
        <div className="text-xs">
          
        </div>
        <div className="grid grid-cols-2 gap-5 justify-items-end lg:flex lg:flex-row lg:space-x-5 lg:items-end lg:flex-wrap text-xs">
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
          <Link
            className="flex flex-row space-x-2 items-center"
            href="https://viditkhandelwal.com"
          >
            <div>VIDITKHANDELWAL.COM</div>
            <HiArrowUpRight />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
