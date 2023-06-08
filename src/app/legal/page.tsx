import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InlineLink from "@/components/InlineLink";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Head from "next/head";

const Legal = () => {
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
      <Header/>
        <MainContent type="normal">
          <div className="flex flex-col justify-center text-2xl lg:text-4xl h-[25vh]">
            <div>Legal Information</div>
          </div>
          <div className="flex flex-col space-y-2.5 text-base lg:w-3/4">
            <p className="font-medium">
              By using this website, using the contact form, and availing any of
              Vidit Khandelwal Studio&apos;s services, you agree to the following
              terms and conditions.
            </p>

            <div className="text-lg lg:text-2xl">Copyrights</div>

            <p>
              The website known as viditkhandelwal.com,
              studio.viditkhandelwal.com, and all{" "}
              <InlineLink href="https://domains.viditkhandelwal.com">
                associated subdomains,
              </InlineLink>{" "}
              are formally registered and legally controlled by Vidit
              Khandelwal.
            </p>
            <p>
              The VK logo, the stylized V logo, and the Futurum Seal are
              protected under copyright laws as the exclusive intellectual
              property of Vidit Khandelwal. These properties must not be
              utilized, disseminated, replicated, or altered by any individual
              or corporate entity unless expressly authorized through a written
              agreement transmitted via an official @viditkhandelwal.com
              electronic mailing address.
            </p>
            <p>
              The typography featured on this website is part of an open-source
              project and has been procured and applied to enhance the aesthetic
              appeal of this commercial website, in strict compliance with the
              terms and conditions outlined in the{" "}
              <InlineLink href="https://github.com/ivodolenc/aspekta/blob/main/LICENSE.txt">
                OFL 1.1 license.
              </InlineLink>
            </p>
            <p>
              All other photographic content showcased on the website must not
              be replicated, disseminated, shared, or portrayed in any manner
              that could suggest proprietary rights over said images by any
              person or entity other than Vidit Khandelwal or Vidit Khandelwal
              Studio.
            </p>
            <p>
              Furthermore, the background image deployed on the website is to be
              treated with the same restrictions. It is strictly forbidden to be
              replicated, disseminated, shared, or portrayed in any manner that
              could lead to the false implication of ownership over the website,
              the corporate entity, or the project by any person or entity other
              than Vidit Khandelwal or Vidit Khandelwal Studio.
            </p>
          </div>
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
}

export default Legal;