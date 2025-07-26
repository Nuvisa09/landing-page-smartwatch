import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-background p-6 rounded-lg text-center border border-[#EFE4D2]  shadow hover:shadow-5xl hover:shadow-[#EFE4D2] transition-shadow duration-300 mb-30">
      <div className="flex justify-center itemms-center mb-4 size-12 rounded-full mx-auto ">
        {icon}
      </div>
      <h3 className="text-xl text-[#EFE4D2]  font-bold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}
