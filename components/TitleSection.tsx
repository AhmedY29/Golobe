import React from "react";
interface TitleSectionProps {
  label: string;
  description: string;
  buttonTitle: string;
}

function TitleSection(props: TitleSectionProps) {
  return (
    <div className="flex justify-between items-center my-10">
      <div className="text">
        <h1 className="text-3xl font-bold mb-2">{props.label}</h1>
        <p className="text-sm text-black/60">{props.description}</p>
      </div>
      <button className="bg-white text-black border-2 border-[#8DD3BB] rounded h-11 px-5 cursor-pointer hover:bg-[#8DD3BB] transition-all duration-200">
        {props.buttonTitle}
      </button>
    </div>
  );
}

export default TitleSection;
