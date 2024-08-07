"use client";

import Image from "next/image";

import WavyText from "@/components/ace/wavy-text";

const Shipping = () => {
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


        <h1 className="text-5xl font-bold mb-6 font-melodrama">Shipping Policy</h1>
         <p className="mb-4">At Core Radiance, we aim to provide efficient and reliable shipping services to ensure your beauty and hair products reach you in a timely manner. Please read our shipping policy below for details on how we handle shipping and delivery.</p>

        <h2 className="text-2xl font-semibold mb-4">1. Shipping Locations</h2>
        <p className="mb-4">We currently ship to locations within [your country] and select international destinations. Please check our shipping options at checkout to see if we deliver to your location.</p>

        <h2 className="text-2xl font-semibold mb-4">2. Processing Time</h2>
        <p className="mb-4">All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in the shipment of your order, we will contact you via email or telephone.</p>

        <h2 className="text-2xl font-semibold mb-4">3. Shipping Rates & Delivery Estimates</h2>
        <p className="mb-4">Shipping charges for your order will be calculated and displayed at checkout. Delivery estimates are provided based on your location and the shipping method chosen at checkout.</p>
        <ul className="list-disc list-inside mb-4">
            <li>Standard Shipping: [estimated delivery time] - [cost]</li>
            <li>Express Shipping: [estimated delivery time] - [cost]</li>
            <li>International Shipping: [estimated delivery time] - [cost]</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">4. Shipment Confirmation & Order Tracking</h2>
        <p className="mb-4">You will receive a shipment confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.</p>

        <h2 className="text-2xl font-semibold mb-4">5. Customs, Duties, and Taxes</h2>
        <p className="mb-4">Core Radiance is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).</p>

        <h2 className="text-2xl font-semibold mb-4">6. Damages</h2>
        <p className="mb-4">Core Radiance is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.</p>

        <h2 className="text-2xl font-semibold mb-4">7. International Shipping Policy</h2>
        <p className="mb-4">We currently ship to select international destinations. Please check our shipping options at checkout for availability. International shipping rates and delivery times vary based on the destination and shipping method chosen.</p>

        <h2 className="text-2xl font-semibold mb-4">8. Returns Policy</h2>
        <p className="mb-4">Our return policy provides detailed information about options and procedures for returning your order. Please refer to our <a href="/refund-policy" className="text-blue-500">Refund Policy</a> page for more information.</p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">If you have any questions about this shipping policy, please contact us at:</p>
        <p className="mb-2"><strong>Core Radiance Customer Support</strong></p>
        <p className="mb-2">Email: <a href="mailto:support@coreradiance.com" className="text-blue-500">support@coreradiance.com</a></p>
        <p>Phone: 1-800-123-4567</p>


    </div>

      </div>
    </div>
  );
};

export default Shipping;
