"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JumboTitle from "@/components/JumboTItle";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Nav from "@/components/Nav";
import ServiceCard from "@/components/ServiceCard";
import ServiceInfo from "@/components/ServiceInfo";
import ServiceName from "@/components/ServiceName";
import ServicePrice from "@/components/ServicePrice";
import ServiceRevisionsInfo from "@/components/ServiceRevisionsInfo";
import Head from "next/head";
import { useState } from "react";
import { BsDot } from "react-icons/bs";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
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
        <Nav isOpen={isOpen} setIsOpen={setIsOpen}></Nav>
        <Header setIsOpen={setIsOpen} current="services" />
        <MainContent type="normal">
          <div className="flex flex-col justify-center text-2xl lg:text-4xl h-[25vh]">
            <div>Website Design & Creation</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-40">
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
                <div className="text-violet-400">
                  This is a labor intensive, complex, and technically demanding
                  service.
                </div>
                <ServicePrice usd={150} inr={3500} />
                <div>
                  Additional costs for any cloud services, external
                  integrations, etc. must be borne by client.
                </div>
                <ServiceRevisionsInfo usd={30} inr={700} />
                <div className="flex flex-row space-x-1 items-center flex-wrap">
                  Rates for continued development and maintenance based on
                  complexity and needs, starting at
                  <ServicePrice usd={25} inr={580}>
                    per hour
                  </ServicePrice>
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
                  <ServicePrice usd={150} inr={3500}>
                    for the first page.
                  </ServicePrice>
                </div>
                <div className="flex flex-row space-x-1">
                  <ServicePrice usd={100} inr={2300}>
                    per page thereafter
                  </ServicePrice>
                </div>
                <div>
                  Additional costs for any cloud services, external
                  integrations, etc. must be borne by client.
                </div>
                <div className="flex flex-row space-x-1">
                  <ServiceRevisionsInfo usd={50} inr={1200}>plus.</ServiceRevisionsInfo>
                </div>
                <div className="flex flex-row space-x-1 items-center flex-wrap">
                  Rates for continued development and maintenance based on
                  complexity and needs, starting at
                  <ServicePrice usd={25} inr={580}>
                    per hour
                  </ServicePrice>
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
                <ServicePrice usd={100} inr={2300}>
                  per 1000 words
                </ServicePrice>
                <ServiceRevisionsInfo usd={10} inr={230} />
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
                <ServicePrice usd={50} inr={1200}>
                  per design. 2 dimensions/sizes included.
                </ServicePrice>
                <div>
                  Print costs, if applicable, will be decided by third-party
                  printer. Raw design files not included, final design files
                  included.
                </div>
                <ServiceRevisionsInfo usd={10} inr={230} />
              </ServiceInfo>
            </ServiceCard>
          </div>
          <div className="flex flex-col justify-center items-end text-base lg:text-lg h-[25vh]">
            <p>Prices adjusted by purchasing power parity (PPP) of USD v. INR. Clients from countries other than USA and India <strong className="font-bold">must</strong> pay in USD. This is not negotiable.</p>
          </div>
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
}
