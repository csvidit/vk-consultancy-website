import Link from "next/link";
import MainContent from "./MainContent";
import { SiCodemagic } from "react-icons/si";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Image from "next/image";

const Hero = () => {
  return (
    <MainContent type="center">
      <div className="text-6xl lg:text-8xl"></div>
      <div className="text-6xl lg:text-8xl">
        your tech team <span className="font-thin">awaits you.</span>
      </div>
      <div className="text-2xl lg:text-4xl font-thin">
        want a cool website for your business? want a fresh design
        system? want to create flyers or posters?
        <span className="font-normal"> we got you.</span>
      </div>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start lg:items-center">
        <Link
          href="https://tjdqeyg9n8x.typeform.com/to/dyMM42pF"
          className="relative group items-center justify-center p-2.5 w-max z-10 transition-all duration-300 ease-in-out"
        >
          <div className="z-10 flex flex-row space-x-2 items-center text-violet-400 dark:text-violet-600 group-hover:text-neutral-900 group-hover:dark:text-neutral-100 transition-all duration-300 ease-in-out">
            <SiCodemagic className="z-10 rotate-0 group-hover:rotate-180 group-hover:transition-all duration-300 ease-in-out" />
            <p className="z-10">Start Elevating Your Business</p>
            {/* <HiOutlineArrowSmRight className="z-10 hidden group-hover:block scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out"/> */}
          </div>
          <div className="absolute left-0 top-0 w-full h-full group-hover:top-0 group-hover:h-1/6  transition-all group-hover:transition-all ease-in-out duration-200 bg-neutral-900 dark:bg-neutral-100 group-hover:place-self-center group-hover:bg-neutral-900 group-hover:dark:bg-neutral-100"></div>
        </Link>
        <Link
          href="/services"
          className="relative group items-center justify-center p-2.5 w-max z-10"
        >
          <div className="z-10 flex flex-row space-x-2 items-center group-hover:text-violet-400 group-hover:dark:text-violet-600">
            <HiOutlineViewGrid className="z-10 group-hover:rotate-45 group-hover:transition-all delay-150 duration-200 ease-in-out" />
            <p className="z-10">Learn More</p>
          </div>
          <div className="absolute left-0 bottom-0 w-full h-[1px] transition-all group-hover:transition-all ease-in-out duration-200 bg-neutral-900 dark:bg-neutral-100 group-hover:place-self-center group-hover:h-full group-hover:bg-neutral-900 group-hover:dark:bg-neutral-100"></div>
        </Link>
      </div>
    </MainContent>
  );
};

export default Hero;

{
  /* <div className="">
        Prices start from $100 for U.S. clients and INR 2300 for Indian clients. Please note that these prices are adjusted for purchasing power parity of the two countries based on cost of living in each. Clients from all other countries must pay in USD.
      </div> */
}
{
  /* <Link href="/contact" className="flex flex-row space-x-2 items-center dark:border-neutral-100 transition-all bg-gradient-to-r from-violet-300 to-neutral-100  text-violet-700 p-2.5 w-max">
        <p>Start Elevating Your Business</p>
        <SiCodemagic/>
      </Link> */
}
