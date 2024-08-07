"use client";

import Image from "next/image";

import WavyText from "@/components/ace/wavy-text";

const Ingredients = () => {
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
        <h1 className="text-5xl font-melodrama font-bold mb-6">Refund Policy</h1>
        <p className="mb-4">At Core Radiance, we strive to provide our customers with the best beauty and hair products. If for any reason you are not completely satisfied with your purchase, we are here to help. Please read our refund policy below.</p>

        <h2 className="text-2xl font-semibold mb-4">1. Returns</h2>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Eligibility:</strong> You have 30 calendar days to return an item from the date you received it.</li>
            <li><strong>Condition:</strong> To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.</li>
            <li><strong>Proof of Purchase:</strong> Your item needs to have the receipt or proof of purchase.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">2. Refunds</h2>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Inspection:</strong> Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item.</li>
            <li><strong>Approval:</strong> If your return is approved, we will initiate a refund to your original method of payment.</li>
            <li><strong>Processing Time:</strong> You will receive the credit within a certain amount of days, depending on your card issuer’s policies.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Shipping</h2>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Responsibility:</strong> You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</li>
            <li><strong>Damaged or Defective Items:</strong> If you receive a defective or damaged item, please contact us immediately at <a href="mailto:support@coreradiance.com" className="text-blue-500">support@coreradiance.com</a> to arrange for a replacement or refund.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">4. Exchanges</h2>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Process:</strong> If you need to exchange an item for the same product, send us an email at <a href="mailto:support@coreradiance.com" className="text-blue-500">support@coreradiance.com</a> and send your item to: [Insert Return Address Here].</li>
            <li><strong>Eligibility:</strong> Items that are opened, used, or not in their original condition are not eligible for exchange.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">5. Non-Returnable Items</h2>
        <p className="mb-4">Certain items cannot be returned, such as:</p>
        <ul className="list-disc list-inside mb-4">
            <li>Gift cards</li>
            <li>Sale items</li>
            <li>Personal care items (e.g., opened hair brushes, combs)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p className="mb-4">If you have any questions on how to return your item to us, contact us at:</p>
        <p className="mb-2"><strong>Core Radiance Customer Support</strong></p>
        <p className="mb-2">Email: <a href="mailto:support@coreradiance.com" className="text-blue-500">support@coreradiance.com</a></p>
        <p>Phone: 1-800-123-4567</p>
    </div>

      </div>
    </div>
  );
};

export default Ingredients;
