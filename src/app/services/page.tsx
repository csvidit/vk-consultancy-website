import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InlineLink from "@/components/InlineLink";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import ServiceCard from "@/components/Services/ServiceCard";
import ServiceInfo from "@/components/Services/ServiceInfo";
import ServiceName from "@/components/Services/ServiceName";
import ServicePrice from "@/components/Services/ServicePrice";
import ServiceRevisionsInfo from "@/components/Services/ServiceRevisionsInfo";
import Head from "next/head";

const Services = () => {
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
            <div>Website Design & Creation</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-40">
            <ServiceCard>
              <ServiceName>Website in Squarespace, upto 10 pages</ServiceName>
              <ServiceInfo>
                <div>
                  Squarespace subscription rates as advertised on{" "}
                  <InlineLink href="https://squarespace.com/pricing">
                    squarespace.com
                  </InlineLink>
                  .
                </div>
                <ServicePrice usd={350} />
                <ServiceRevisionsInfo usd={25} />
                <div className="flex flex-row space-x-1 items-center flex-wrap">
                  Rates for continued development and maintenance based on
                  complexity and needs, starting at
                  <ServicePrice usd={20}>per billable hour</ServicePrice>
                  Number of hours depends on complexity of the project.
                </div>
              </ServiceInfo>
            </ServiceCard>
            <ServiceCard>
              <ServiceName>Landing Page in Squarespace</ServiceName>
              <div>
                Squarespace subscription rates as advertised on{" "}
                <InlineLink href="https://squarespace.com/pricing">
                  squarespace.com
                </InlineLink>
                .
              </div>
              <ServiceInfo>
                <ServicePrice usd={50} />
                <ServiceRevisionsInfo usd={15} />
                <div className="flex flex-row space-x-1 items-center flex-wrap">
                  Rates for continued development and maintenance based on
                  complexity and needs, starting at
                  <ServicePrice usd={20}>per billable hour</ServicePrice>
                  Number of hours depends on complexity of the project.
                </div>
              </ServiceInfo>
            </ServiceCard>
            <ServiceCard>
              <ServiceName>Custom Landing Page, React.js/Next.js</ServiceName>
              <ServiceInfo>
                <div className="text-violet-400">
                  This is a labor intensive, complex, and technically demanding
                  service.
                </div>
                <ServicePrice usd={150} />
                <div>
                  Additional costs for any cloud services, external
                  integrations, etc. must be borne by client.
                </div>
                <ServiceRevisionsInfo usd={30} />
                <div className="flex flex-row space-x-1 items-center flex-wrap">
                  Rates for continued development and maintenance based on
                  complexity and needs, starting at
                  <ServicePrice usd={30}>per billable hour</ServicePrice>
                  Number of hours depends on complexity of the project.
                </div>
              </ServiceInfo>
            </ServiceCard>
            <ServiceCard>
              <ServiceName>Custom Website, Next.js</ServiceName>
              <ServiceInfo>
                <div className="text-violet-400">
                  This is a labor intensive, complex, and technically demanding
                  service.
                </div>
                <div className="flex flex-row space-x-1">
                  <ServicePrice usd={150}>for the first page.</ServicePrice>
                </div>
                <div className="flex flex-row space-x-1">
                  <ServicePrice usd={100}>per page thereafter</ServicePrice>
                </div>
                <div>
                  Additional costs for any cloud services, external
                  integrations, etc. must be borne by client.
                </div>
                <div className="flex flex-row space-x-1">
                  <ServiceRevisionsInfo usd={50}>plus.</ServiceRevisionsInfo>
                </div>
                <div className="flex flex-row space-x-1 items-center flex-wrap">
                  Rates for continued development and maintenance based on
                  complexity and needs, starting at
                  <ServicePrice usd={30}>per billable hour</ServicePrice>
                  Number of hours depends on complexity of the project.
                </div>
              </ServiceInfo>
            </ServiceCard>
          </div>
          <div className="flex flex-col justify-center text-2xl lg:text-4xl h-[25vh]">
            <div>Content Creation & Copywriting</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <ServiceCard>
              <ServiceName>Copywriting, Websites and Print Media</ServiceName>
              <ServiceInfo>
                <ServicePrice usd={100}>per 1000 words</ServicePrice>
                <ServiceRevisionsInfo usd={10} />
              </ServiceInfo>
            </ServiceCard>
            <ServiceCard>
              <ServiceName>Graphic Design</ServiceName>
              <ServiceInfo>
                <div>
                  This includes social media posts such as Instagram posts and
                  stories, and print media such as flyers, ads, and business
                  cards.
                </div>
                <ServicePrice usd={50}>
                  per design. 2 dimensions/sizes included.
                </ServicePrice>
                <div>
                  Print costs, if applicable, will be decided by third-party
                  printer. Raw design files not included, final design files
                  included.
                </div>
                <ServiceRevisionsInfo usd={10} />
              </ServiceInfo>
            </ServiceCard>
          </div>
          <div className="flex flex-col justify-center items-end text-base lg:text-lg h-[25vh]">
            <p>
              Prices adjusted roughly by exchange rates. Except for clients from
              India, all payments
              <strong className="font-bold"> must </strong>be in USD (converted
              from the local currency, if applicable).
            </p>
          </div>
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
};

export default Services;
