import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JumboTitle from "@/components/JumboTItle";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import ServiceCard from "@/components/ServiceCard";
import ServiceInfo from "@/components/ServiceInfo";
import ServiceName from "@/components/ServiceName";
import ServicePrice from "@/components/ServicePrice";
import ServiceRevisionsInfo from "@/components/ServiceRevisionsInfo";
import Head from "next/head";
import { BsDot } from "react-icons/bs";

export default function Home() {
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
        <Header current="services" />
        <MainContent type="normal">
          <div className="flex flex-col justify-center text-2xl lg:text-4xl h-[25vh]">
            <div>Website Design & Creation</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <ServiceCard>
              <ServiceName>Website in Squarespace, upto 10 pages</ServiceName>
              <ServiceInfo>
                <ServicePrice usd={250} inr={5800} />
                <ServiceRevisionsInfo usd={25} inr={580} />
              </ServiceInfo>
            </ServiceCard>
            <ServiceCard>
              <ServiceName>Landing Page in Squarespace</ServiceName>
              <ServiceInfo>
                <ServicePrice usd={50} inr={1200} />
                <ServiceRevisionsInfo usd={15} inr={350} />
              </ServiceInfo>
            </ServiceCard>
            <ServiceCard>
              <ServiceName>Custom Landing Page, React.js/Next.js</ServiceName>
              <ServiceInfo>
                <ServicePrice usd={150} inr={3500} />
                <ServiceRevisionsInfo usd={30} inr={700} />
              </ServiceInfo>
            </ServiceCard>
            <ServiceCard>
              <ServiceName>Custom Website, Next.js</ServiceName>
              <ServiceInfo>
                <div className="font-light">USD 100 + USD 50 per page</div>
                
                <div className="font-light">INR 2300 + INR 1200 per page</div>
                <div className="flex flex-row space-x-1 items-center flex-wrap">
                  2 revisions, additional revisions as per complexity.
                </div>
              </ServiceInfo>
            </ServiceCard>
          </div>
        </MainContent>
        <Footer/>
      </MainContainer>
    </>
  );
}
