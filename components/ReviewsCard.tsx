import Image from "next/image";
import React from "react";

import { FaStar } from "react-icons/fa6";

interface ReviewsCardProps {
  title: string;
  comment: string;
  rating: number;
  user: string;
  destination: string;
  image?: string;
}

function ReviewsCard(props: ReviewsCardProps) {
  return (
    <div className="bg-white shadow hover:shadow-2xl shadow-[#8dd3ba38] rounded-2xl p-5 min-w-90 max-w-90 hover:scale-102 duration-200 transition-all ">
      <div className="text mb-4">
        <h1 className="font-bold text-2xl mb-4">{props.title}</h1>
        <p className="line-clamp-2 text-black/60">{props.comment}</p>
        <h1 className="font-bold">View more</h1>
      </div>
      <div className="rate flex items-center gap-1 mb-4">
        <FaStar className="text-yellow-300" />
        <h1>{props.rating}</h1>
      </div>
      <div className="user mb-4">
        <h1 className="font-bold">{props.user}</h1>
        <p className="text-black/60">{props.destination}</p>
      </div>
      {props.image && (
        <div className="image">
          <Image
            src={props.image}
            alt={props.destination}
            width={377}
            height={200}
          />
        </div>
      )}
    </div>
  );
}

export default ReviewsCard;
