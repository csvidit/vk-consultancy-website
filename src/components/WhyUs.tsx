import styles from "./WhyUs.module.css";
import {
  HiOutlineScale,
  HiOutlineFaceSmile,
  HiOutlineStar,
} from "react-icons/hi2";

const WhyUs = () => {
  return (
    <div
    id="why-us"
      className={
        "min-w-screen min-h-screen h-full flex flex-col space-y-5 lg:space-y-10 bg-transparent justify-center p-5 lg:p-10 text-neutral-100 dark:text-neutral-900 selection:text-neutral-900 selection:bg-neutral-100 dark:selection:text-neutral-100 dark:selection:bg-neutral-900 " +
        styles.main_container +
        " " +
        styles.main_background
      }
    >
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:justify-between lg:items-center">
        <div className="text-2xl lg:text-4xl">Why Us?</div>
        <div className="flex flex-col space-y-10 lg:space-y-20 lg:w-2/3">
          <div className="flex flex-col lg:flex-row space-y-2.5 lg:space-y-0 lg:space-x-10 lg:items-center group">
            <div className="p-2.5 lg:p-5 w-fit h-fit rounded-full border border-violet-600 text-lg lg:text-2xl group-hover:bg-violet-600 group-hover:text-neutral-100 transition-all duration-200 ease-in-out">
              <HiOutlineScale />
            </div>
            <div className="flex flex-col space-y-1 text-lg lg:text-2xl">
              <div className="">Competitive Pricing</div>
              <div className="dark:text-neutral-600 text-neutral-400 font-light text-base lg:text-lg lg:w-3/4 flex-wrap">
                Never worry about increasing prices again. Starting at just $50,
                two revisions included.
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row space-y-2.5 lg:space-y-0 lg:space-x-10 lg:items-center group">
            <div className="p-2.5 lg:p-5 w-fit h-fit rounded-full border border-violet-600 text-lg lg:text-2xl group-hover:bg-violet-600 group-hover:text-neutral-100 transition-all duration-200 ease-in-out">
              <HiOutlineStar />
            </div>
            <div className="flex flex-col space-y-1 text-lg lg:text-2xl">
              <div className="">Next-Gen Expertise</div>
              <div className="dark:text-neutral-600 text-neutral-400 font-light text-base lg:text-lg lg:w-3/4 flex-wrap">
                We use the best-in-class tools and industry-leading
                technologies. Say bye-bye to old, clunky websites or designs.
                Say hello to your unrealized business potential.
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row space-y-2.5 lg:space-y-0 lg:space-x-10 lg:items-center group">
            <div className="p-2.5 lg:p-5 w-fit h-fit rounded-full border border-violet-600 text-lg lg:text-2xl group-hover:bg-violet-600 group-hover:text-neutral-100 transition-all duration-200 ease-in-out">
              <HiOutlineFaceSmile />
            </div>
            <div className="flex flex-col space-y-1 text-lg lg:text-2xl">
              <div className="">Continued Service</div>
              <div className="dark:text-neutral-600 text-neutral-400 font-light text-base lg:text-lg lg:w-3/4 flex-wrap">
                If needed, you can contract us for continued maintenance and
                service of your website. Pay only for the work you need, by the
                hour. No overheads.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
