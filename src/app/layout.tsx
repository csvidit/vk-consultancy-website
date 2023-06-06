import Head from "next/head";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";

export const metadata = {
  title: "Vidit Khandelwal Studio",
  description:
    "A software and design consultancy, specializing in industry-leading web development and cutting-edge UI and graphic design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="">{children}</body>
    </html>
  );
}
