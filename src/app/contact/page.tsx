import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import InlineLink from "@/components/InlineLink";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Head from "next/head";

const Contact = () => {
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
        <MainContent type="center">
          <div className="flex flex-col space-y-5 lg:space-y-10 justify-center text-2xl lg:text-4xl">
            <div className="">
              <div className="inline">Contact us at{" "}
                <InlineLink href="mailto:vidit@viditkhandelwal.com">
                  vidit@viditkhandelwal.com
                </InlineLink>{" "}
                or use{" "}
                <InlineLink href="https://tjdqeyg9n8x.typeform.com/to/dyMM42pF">
                  this form
                </InlineLink>
                .
              </div>
        
               
            </div>
          </div>
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
}

export default Contact;