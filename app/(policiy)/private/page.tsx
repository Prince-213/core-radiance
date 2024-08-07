"use client";

import Image from "next/image";

import WavyText from "@/components/ace/wavy-text";

const Private = () => {
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

        <div className=" w-full mx-auto p-6 ">
        <h1 className="text-5xl font-bold mb-6 font-melodrama">Privacy Policy</h1>
        <p className="mb-4">At Core Radiance, we value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard your information when you visit our website and use our services.</p>

        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and payment details when you make a purchase or create an account.</li>
            <li><strong>Usage Data:</strong> We collect information on how you interact with our website, such as your IP address, browser type, and pages visited.</li>
            <li><strong>Cookies:</strong> Our website uses cookies to enhance your browsing experience. You can control the use of cookies through your browser settings.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Order Processing:</strong> To process and fulfill your orders, including sending order confirmations and updates.</li>
            <li><strong>Customer Support:</strong> To provide customer support and respond to your inquiries.</li>
            <li><strong>Marketing:</strong> To send promotional materials and newsletters, if you have opted in to receive them.</li>
            <li><strong>Website Improvement:</strong> To analyze usage data and improve our {"website's"} functionality and user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us with order fulfillment, payment processing, and website analytics.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">4. Protecting Your Information</h2>
        <p className="mb-4">We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Opt-Out:</strong> You can opt out of receiving marketing communications from us by following the unsubscribe link in our emails.</li>
            <li><strong>Access and Update:</strong> You can access and update your personal information by logging into your account on our website.</li>
            <li><strong>Cookies:</strong> You can control the use of cookies through your browser settings.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">6. {"Children's"} Privacy</h2>
        <p className="mb-4">Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us to have it removed.</p>

        <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
        <p className="mb-4">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. You are advised to review this policy periodically for any changes.</p>

        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="mb-4">If you have any questions about this privacy policy, please contact us at:</p>
        <p className="mb-2"><strong>Core Radiance Customer Support</strong></p>
        <p className="mb-2">Email: <a href="mailto:support@coreradiance.com" className="text-blue-500">support@coreradiance.com</a></p>
        <p>Phone: 1-800-123-4567</p>
    </div>

      </div>
    </div>
  );
};

export default Private;
