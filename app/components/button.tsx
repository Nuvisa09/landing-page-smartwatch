import React, { ReactNode } from "react";
// import { Interface } from "readline";

// Interface ButtonProps {
//     Children?: ReactNode;
//     size: "lg" | "xl" | "sm"
// }

type ButtonProps = {
  children?: ReactNode;
  size: "lg" | "xl" | "sm"; //enum
  params?: unknown;
};

// type ButtonPropsExtend = PropsWithChildren & {
//     size: "lg" | "xl" |"sm"
// }

// interface ButtonPropsExtend extends PropsWithChildren{
//     size: "lg" | "xl" | "sm"
// }

export function Button({ children, size }: ButtonProps) {
  const classSize = {
    lg: "py-2 px-4",
    xl: "py-3 px-6",
  };

  if (typeof size === "function") {
  }
  if (typeof size === "object") {
  }
  return (
    <button
      className={`bg-[#EFE4D2] text-black font-semibold rounded-full mt-10 mb-30 py-3 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ${
        classSize[size as keyof typeof classSize]
      }`}
    >
      {children}
    </button>
  );
}
