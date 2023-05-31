import styles from "./WhyUs.module.css";
import {
  HiOutlineScale,
  HiOutlineFaceSmile,
  HiOutlineStar,
} from "react-icons/hi2";
import WhyUsCard from "./WhyUsCard";
import WhyUsIcon from "./WhyUsIcon";
import WhyUsContent from "./WhyUsContent";
import WhyUsTitle from "./WhyUsTitle";
import WhyUsText from "./WhyUsText";

const WhyUs = () => {
  return (
    <div
      id="why-us"
      className={
        "min-w-screen min-h-screen h-full flex flex-col space-y-5 lg:space-y-10 bg-transparent justify-center p-5 lg:p-10 text-neutral-100 selection:text-neutral-900 dark:text-neutral-900 selection:bg-neutral-100 selection:dark:text-neutral-100 selection:dark:bg-neutral-900 " +
        styles.main_container +
        " " +
        styles.main_background
      }
    >
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:justify-between lg:items-center">
        <div className="text-2xl lg:text-4xl">Why Us?</div>
        <div className="flex flex-col space-y-10 lg:space-y-20 lg:w-2/3">
          <WhyUsCard>
            <WhyUsIcon>
              <HiOutlineScale />
            </WhyUsIcon>
            <WhyUsContent>
              <WhyUsTitle>Competitive Pricing</WhyUsTitle>
              <WhyUsText>
                Never worry about increasing prices again. Starting at just $50,
                two revisions included.
              </WhyUsText>
            </WhyUsContent>
          </WhyUsCard>
          <WhyUsCard>
            <WhyUsIcon>
              <HiOutlineStar />
            </WhyUsIcon>
            <WhyUsContent>
              <WhyUsTitle>Next-Gen Expertise</WhyUsTitle>
              <WhyUsText>
                We use the best-in-class tools and industry-leading
                technologies. Say bye-bye to old, clunky websites or designs.
                Say hello to your unrealized business potential.
              </WhyUsText>
            </WhyUsContent>
          </WhyUsCard>
          <WhyUsCard>
            <WhyUsIcon>
              <HiOutlineFaceSmile />
            </WhyUsIcon>
            <WhyUsContent>
              <WhyUsTitle>Continued Service</WhyUsTitle>
              <WhyUsText>
                If needed, you can contract us for continued maintenance and
                service of your website. Pay only for the work you need, by the
                hour. No overheads.
              </WhyUsText>
            </WhyUsContent>
          </WhyUsCard>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
