import type { Metadata } from "next";

import { Poppins as PopSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { ChevronUp, XCircle } from "lucide-react";
import RewardBar from "@/components/custom/reward-bar";
import SmoothScrolling from "@/components/custom/smoothscroll";
import NewsModal from "@/components/custom/new-modal";
import Image from "next/image";
import advert from "@/lib/images/autumn-goodman-vTL_qy03D1I-unsplash.jpg";
import ModalWrap from "@/components/custom/modal-wrap";
import CartView from "@/components/custom/cartview";

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Head from "next/head";

const popSans = PopSans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--pop-sans",
});

export const metadata: Metadata = {
  title: "Core Radiance",
  description: "We're All-Natural, All-Effective: Better for Your Hair, Better for the Planet",
  icons: {
    icon: '/favicon.ico', // /public path
  },

};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
       
        <ClerkProvider>
      <SmoothScrolling>

        <body
          className={cn(
            "min-h-screen relative font-poppins bg-background  antialiased w-full overflow-x-hidden"
          )}
        >
          <ModalWrap>
            <CartView />
            <div className=" w-full ">
              <Header />
            </div>

            <div className=" fixed bottom-0 z-50 w-full">
              <RewardBar />
            </div>

            {children}
          </ModalWrap>

          <div className=" w-full">
            <Footer />
          </div>
        </body>
      </SmoothScrolling>
      </ClerkProvider>
    </html>
  );
}
