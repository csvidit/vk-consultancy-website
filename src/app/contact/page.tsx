"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import InlineLink from "@/components/InlineLink";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Head from "next/head";
import { useState } from "react";
import Header2 from "@/components/Header2";
import WhyUsContent from "@/components/WhyUsContent";
import WhyUsCard from "@/components/WhyUsCard";
import WhyUsTitle from "@/components/WhyUsTitle";
import WhyUsText from "@/components/WhyUsText";
import CardContent from "@/components/CardContent";
import CardText from "@/components/CardText";
import CardTitle from "@/components/CardTitle";
import Card from "@/components/Card";

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
          <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-10 h-screen text-2xl lg:text-4xl">
            <Card>
              <CardContent>
                <CardTitle>Let's Talk!</CardTitle>
                <CardText>vidit@viditkhandelwal.com.</CardText>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardTitle>Business Inquries</CardTitle>
                <CardText>Use <InlineLink href="https://tjdqeyg9n8x.typeform.com/to/dyMM42pF">this form</InlineLink> for all business inquiries. It will ensure a speedy response</CardText>
              </CardContent>
            </Card>
          </div>
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
}
