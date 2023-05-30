"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Hero from "@/components/Hero";
import InlineLink from "@/components/InlineLink";
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
import Header2 from "@/components/Header2";

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
        <Header2 current="contact" />
        <MainContent type="normal">
          <div className="flex flex-col space-y-5 lg:space-y-10 justify-center text-2xl lg:text-4xl">
            <div className="">
              <div className="inline">Contact us at</div>
              <span className="inline text-violet-700 dark:text-violet-300">
                {" "}
                <InlineLink href="mailto:vidit@viditkhandelwal.com">
                  vidit@viditkhandelwal.com
                </InlineLink>{" "}
                or use{" "}
                <InlineLink href="https://tjdqeyg9n8x.typeform.com/to/dyMM42pF">
                  this form
                </InlineLink>
                .
              </span>
            </div>
          </div>
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
}
