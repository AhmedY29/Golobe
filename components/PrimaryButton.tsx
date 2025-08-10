import React, { ReactNode } from "react";
import { LuLoaderCircle } from "react-icons/lu";

interface PrimaryButtonProps {
  size?: string;
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
  children?: ReactNode;
}

function PrimaryButton({
  size,
  text,
  onClick,
  type,
  loading,
  children,
}: PrimaryButtonProps) {
  console.log(loading, "load");
  return (
    <button
      disabled={loading}
      type={type ? type : "button"}
      onClick={onClick}
      className={`${
        size == "lg"
          ? "flex justify-center py-2 bg-white border-2 border-[#8DD3BB] hover:bg-[#8DD3BB]"
          : "bg-[#8DD3BB] hover:bg-[#7ebea8] h-11"
      } w-full rounded text-lg hover:shadow cursor-pointer flex justify-center items-center transition-all duration-200 font-medium`}
    >
      {children ? (
        children
      ) : loading ? (
        <LuLoaderCircle className="animate-spin text-2xl" />
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}

export default PrimaryButton;
