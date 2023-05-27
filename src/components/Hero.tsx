import Link from "next/link";
import MainContent from "./MainContent";
import { SiCodemagic } from "react-icons/si";
import Image from "next/image";

const Hero = () => {
  return (
    <MainContent type="center">
        <div className="text-6xl lg:text-8xl">
            
        </div>
      <div className="text-6xl lg:text-8xl">
        your tech team <span className="font-thin">awaits you.</span>
      </div>
      <div className="text-2xl lg:text-4xl font-thin">
        want a sick website for your business? want to create a design system?
        want to create flyers or posters?{" "}
        <span className="font-normal">we got you.</span>
      </div>
      {/* <div className="">
        Prices start from $100 for U.S. clients and INR 2300 for Indian clients. Please note that these prices are adjusted for purchasing power parity of the two countries based on cost of living in each. Clients from all other countries must pay in USD.
      </div> */}
      {/* <Link href="/contact" className="flex flex-row space-x-2 items-center dark:border-neutral-100 transition-all bg-gradient-to-r from-violet-300 to-neutral-100  text-violet-700 p-2.5 w-max">
        <p>Start Elevating Your Business</p>
        <SiCodemagic/>
      </Link> */}
      <Link
        href="https://tjdqeyg9n8x.typeform.com/to/dyMM42pF"
        className="relative group items-center justify-center p-2.5 w-max"
      >
        <div className="flex flex-row space-x-2 items-center z-10 group-hover:text-violet-400 group-hover:dark:text-violet-600">
          <SiCodemagic className="z-10 rotate-6 group-hover:rotate-45 group-hover:transition-all delay-150 duration-200 ease-in-out" />
          <p className="z-10">Start Elevating Your Business</p>
        </div>
        <div className="absolute left-0 bottom-0 w-full h-[1px] transition-all group-hover:transition-all ease-in-out duration-200 bg-neutral-900 dark:bg-neutral-100 group-hover:place-self-center group-hover:h-full group-hover:bg-neutral-900 group-hover:dark:bg-neutral-100"></div>
      </Link>
    </MainContent>
  );
};

export default Hero;