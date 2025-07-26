import FeatureCard from "./components/FeatureCard";
import Image from "next/image";
import { BatteryIcon, BellIcon, HeartIcon } from "./components/icon";

export default function SmartWatchPage() {
  return (
    <div className="container mx-auto px-4 py-13 n">
      <section className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left py-12 px-8 lg:mt-17 ">
        <div className="order-1 lg:order-2 lg:mt-0 lg:w-1/2 flex justify-center lg:w-[600px] mx-auto mb-8">
          <Image
            src="/watch2.png"
            alt="Smartwatch product image"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="order-2 lg:order-1 text-center lg:text-right lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#EFE4D2]  tracking-tight lg:mb-10">
            The Future on Your Wrist
          </h1>
          <p className="mt-4 mx-w-xl mx-auto text-lg text-slate-400 lg:ml-20">
            Experience seamless connectivity and track your health like ever
            before. Elegance meets technology.
          </p>
          <div className="mt-8 text-center lg:text-left lg:ml-30">
            <button className="mt-8 bg-[#EFE4D2] text-black px-8 py-8 rounded-full font-semibold hover:bg-[#FFCB61] hover:text-black transition-colors ">
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <section className="my-30 ">
        <h2 className="text-3xl font-bold text-center mb-20 text-[#EFE4D2] lg:text-5xl ">
          Key Features SmartWatch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<HeartIcon className="size-12 text-red-500" />}
            title="Health Tracking"
            description="Monitor your heart rate, sleep patterns, and daily activity 24/7."
          />
          <FeatureCard
            icon={<BatteryIcon className="size-12 text-red-500" />}
            title="Long Battery Life"
            description="Up to 14 days of battery life on a single charge. Focus on your goals, not the charger."
          />
          <FeatureCard
            icon={<BellIcon className="size-12 text-red-500" />}
            title="Smart Notifications"
            description="Get calls, texts, and app notifications right on your wrist. never miss what matters."
          />
        </div>
      </section>
    </div>
  );
}
