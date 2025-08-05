import Image from "next/image";
import React from "react";
interface PlanCardProps {
  image: string;
  place: string;
}

function PlanCard(props: PlanCardProps) {
  return (
    <div className="flex gap-5 items-center p-3 bg-white rounded shadow hover:shadow-lg transition-all duration-200">
      <div className="image">
        <Image
          src={props.image}
          alt={`Photo of ${props.place}`}
          width={100}
          height={100}
        />
      </div>
      <div className="text flex flex-col">
        <h1 className="text-[#112211] font-medium text-xl">{props.place}</h1>
        <h1>Flights • Hotels • Resorts</h1>
      </div>
    </div>
  );
}

export default PlanCard;
