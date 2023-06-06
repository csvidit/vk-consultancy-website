import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import InlineLink from "@/components/InlineLink";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Vidit Khandelwal Studio</title>
        <meta
          name="description"
          content="Vidit Khandelwal's software and design consultancy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vidit Khandelwal" />
        <meta
          name="keywords"
          content="Vidit Khandelwal, DePauw University, DePauw, CS, computer science, author, writer, Journal, series, TGHC, scifi, science fiction, Pondering Upon, snapshot, turbobiz, bio, github, coder, developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />

        <meta property="og:title" content="Vidit Khandelwal Studio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.webp" />
        <meta property="og:url" content="https://studio.viditkhandelwal.com" />
        <meta property="og:site_name" content="Vidit Khandelwal" />
        <meta
          property="description"
          content="Vidit Khandelwal's software and design consultancy."
        />
      </Head>
      <MainContainer>
        <Header current="about" />
        <MainContent type="normal">
          <div className="flex flex-col space-y-5 lg:space-y-10 justify-center text-2xl lg:text-4xl h-[100vh]">
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10 lg:items-start">
              <div className="relative">
                <Image
                  width={200}
                  height={200}
                  src="/AXOFormalPortraitSQ.jpg"
                  alt="Portrait of Vidit Khandelwal"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-5 lg:space-y-10">
                <div className="">
                  <div className="inline">Vidit Khandelwal</div>
                  <span className="inline text-violet-300">
                    {" "}
                    is a software engineer, web developer, and UI designer based
                    in the United States and India.
                  </span>
                </div>
                <div className="text-base lg:text-lg spaced">
                  He graduated summa cum laude and a member of the Computer
                  Science Honor Society from DePauw University in 2023, earning
                  a degree in Computer Science. He also spent a semester at the
                  University of Oxford, studying international business and
                  finance.
                </div>
                <div className="text-base lg:text-lg spaced">
                  He has worked at the CaptureNoire project of Pixus, Inc., a
                  very early-age start-up based out of Indianapolis, IN. He
                  interned there as the lead engineer during his time as a
                  student, spearheading the technical development of an
                  industry-grade photography app.{" "}
                </div>
                <div className="text-base lg:text-lg spaced">
                  To know more, visit his{" "}
                  <InlineLink href="https://cs.viditkhandelwal.com">
                    portfolio
                  </InlineLink>
                  . He can be contacted for legitimate reasons at{" "}
                  <InlineLink href="mailto:vidit@viditkhandelwal.com">
                    vidit@viditkhandelwal.com
                  </InlineLink>
                </div>
              </div>
            </div>
          </div>
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
}
export default About;