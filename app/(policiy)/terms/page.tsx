"use client";

import Image from "next/image";

import WavyText from "@/components/ace/wavy-text";

const Terms = () => {
  return (
    <div className=" w-full pb-10 lg:min-h-screen bg-foral relative">
      <Image
        src={
          "https://assets.website-files.com/63d0c06097974d7738bb5468/63f83ba903ce1c1d09aa81b8_shape-3.svg"
        }
        alt=""
        width={250}
        height={250}
        className=" absolute top-5 -left-20"
      />
      <Image
        src={
          "https://assets.website-files.com/63d0c06097974d7738bb5468/63f83bff98df8623ec29e553_shape-4.svg"
        }
        alt=""
        width={150}
        height={150}
        className=" absolute bottom-0 right-0"
      />
      <div className=" w-[80%] mx-auto pt-[25vh]">

        <div className=" w-full p-6 ">


        <h1 className="text-5xl font-bold mb-6 font-melodrama">Terms and Conditions</h1>
        <p className="mb-4">Welcome to Core Radiance. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Core {"Radiance's"} website if you do not accept all of the terms and conditions stated on this page.</p>

        <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
        <p className="mb-4">{"The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and any or all Agreements: Client, You, and Your refers to you, the person accessing this website and accepting the Company's terms and conditions. The Company, Ourselves, We, Our, and Us refers to our Company. Party, Parties, or Us refers to both the Client and ourselves, or either the Client or ourselves."}</p>

        <h2 className="text-2xl font-semibold mb-4">2. Use of Our Site</h2>
        <ul className="list-disc list-inside mb-4">
            <li>You must be at least 18 years of age to use our website. By using our website and agreeing to these terms and conditions, you warrant and represent that you are at least 18 years of age.</li>
            <li>Using this website in any way that is, or may be, damaging to this website or impairing of the availability or accessibility of this website is strictly prohibited.</li>
            <li>Using this website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the website, or to any person or business entity, is prohibited.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
        <p className="mb-4">Unless otherwise stated, Core Radiance and/or its licensors own the intellectual property rights published on this website and materials used on Core Radiance. Subject to the license below, all these intellectual property rights are reserved.</p>
        <p className="mb-4">You may view, download for caching purposes only, and print pages, files, or other content from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>


    </div>

      </div>
    </div>
  );
};

export default Terms;
