import Link from "next/link";
import { HiArrowUpRight, HiOutlineXMark } from "react-icons/hi2";

const Nav = (props: { isOpen: boolean; setIsOpen: any }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 w-screen h-screen bg-neutral-900 flex-col space-y-5 lg:space-y-10 items-start p-10 lg:p-20 font-light text-neutral-600 ${
        props.isOpen
          ? "flex opacity-100 transition-opacity duration-300"
          : "hidden opacity-0 transition-opacity duration-300"
      }`}
    >
      <button
        className="absolute right-10 top-10 text-6xl lg:text-8xl hover:text-violet-600 transition-all duration-200 ease-in-out"
        onClick={() => {
          props.setIsOpen(false);
        }}
      >
        <HiOutlineXMark />
      </button>

      <div className="flex flex-col space-y-1 group text-6xl lg:text-8xl">
        <Link href="/" className="flex flex-row space-x-1 group transition-all">
          <div className="flex flex-row space-x-1 group-hover:text-neutral-400 transition-all duration-200 ease-in-out">
            <div className="flex">Home</div>
          </div>
        </Link>
        <div className="border-t border-t-violet-600 dark:border-t-violet-600 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></div>
      </div>
      <div className="flex flex-col space-y-1 group text-6xl lg:text-8xl">
        <Link
          href="/about"
          className="flex flex-row space-x-1 group transition-all"
        >
          <div className="flex flex-row space-x-1 group-hover:text-neutral-400 transition-all duration-200 ease-in-out">
            <div className="flex">About</div>
          </div>
        </Link>
        <div className="border-t border-t-violet-600 dark:border-t-violet-600 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></div>
      </div>
      <div className="flex flex-col space-y-1 group text-6xl lg:text-8xl">
        <Link
          href="/services"
          className="flex flex-row space-x-1 group transition-all"
        >
          <div className="flex flex-row space-x-1 group-hover:text-neutral-400 transition-all duration-200 ease-in-out">
            <div className="flex">Services</div>
          </div>
        </Link>
        <div className="border-t border-t-violet-600 dark:border-t-violet-600 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></div>
      </div>
      <div className="flex flex-col space-y-1 group text-6xl lg:text-8xl">
        <Link
          href="/contact"
          className="flex flex-row space-x-1 group transition-all"
        >
          <div className="flex flex-row space-x-1 group-hover:text-neutral-400 transition-all duration-200 ease-in-out">
            <div className="flex">Contact</div>
          </div>
        </Link>
        <div className="border-t border-t-violet-600 dark:border-t-violet-600 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></div>
      </div>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-center text-2xl lg:text-4xl">
        <div className="flex flex-col space-y-1 group">
          <Link
            href="https://linkedin.com/in/viditkhandelwal"
            className="flex flex-row space-x-1 group transition-all"
          >
            <div className="flex flex-row space-x-1 group-hover:text-neutral-400 transition-all duration-200 ease-in-out">
              <div className="flex">LINKEDIN</div>
              <HiArrowUpRight />
            </div>
          </Link>
          <div className="border-t border-t-violet-600 dark:border-t-violet-600 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></div>
        </div>
        <div className="flex flex-col space-y-1 group">
          <Link
            href="https;//read.cv/viditkhandelwal"
            className="flex flex-row space-x-1 group transition-all"
          >
            <div className="flex flex-row space-x-1 group-hover:text-neutral-400 transition-all duration-200 ease-in-out">
              <div className="flex">READ.CV</div>
              <HiArrowUpRight />
            </div>
          </Link>
          <div className="border-t border-t-violet-600 dark:border-t-violet-600 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

{
  /* <div className="flex flex-col space-y-1 group">
        <Link
          href="https://viditkhandelwal.com"
          className="flex flex-row space-x-1 group transition-all"
        >
          <div className="flex flex-row space-x-1">
            <div className="flex">THE WORLD OF VIDIT KHANDELWAL</div>
          </div>
        </Link>
        <div className="border-t border-t-violet-600 dark:border-t-violet-600 w-0 z-0 h-1/2 group-hover:w-full group-hover:transition-all duration-200 ease-in-out bg-neutral-900 dark:bg-neutral-100"></div>
      </div> */
}
