import React, { ReactNode } from "react";

interface PrimaryButtonProps {
  size?: string;
  text?: string;
  children?: ReactNode;
}

function PrimaryButton({ size, text, children }: PrimaryButtonProps) {
  return (
    <button
      className={`${
        size == "lg"
          ? "flex justify-center py-2 bg-white border-2 border-[#8DD3BB] hover:bg-[#8DD3BB]"
          : "bg-[#8DD3BB] hover:bg-[#7ebea8] h-11"
      } w-full rounded text-lg hover:shadow cursor-pointer transition-all duration-200 font-medium`}
    >
      {children ? children : <h1>{text}</h1>}
    </button>
  );
}

export default PrimaryButton;
