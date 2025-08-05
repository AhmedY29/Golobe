import React from "react";
import TitleSection from "./TitleSection";
import PlanCard from "./PlanCard";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

function PlanTripSection() {
  const placesImages = [
    {
      image: "/plan-card-img1 (9).png",
      place: "Istanbul, Turkey",
    },
    {
      image: "/plan-card-img1 (1).png",
      place: "Sydney, Australia",
    },
    {
      image: "/plan-card-img1 (5).png",
      place: "Baku, Azerbaijan",
    },
    {
      image: "/plan-card-img1 (6).png",
      place: "Malé, Maldives",
    },
    {
      image: "/plan-card-img1 (2).png",
      place: "Paris, France",
    },
    {
      image: "/plan-card-img1 (7).png",
      place: "New York, US",
    },
    {
      image: "/plan-card-img1 (3).png",
      place: "London, UK",
    },
    {
      image: "/plan-card-img1 (4).png",
      place: "Tokyo, Japan",
    },
    {
      image: "/plan-card-img1 (8).png",
      place: "Dubai, UAE",
    },
  ];
  return (
    <section className="plan-trip-container flex flex-col items-center">
      <div className="plan-trip-content w-[90%]">
        <TitleSection
          label="Plan Your Perfect Trip"
          description="Search Flights & Places Hire to our most popular destinations"
          buttonTitle="See more places"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {placesImages.map((e) => (
            <PlanCard key={e.place} image={e.image} place={e.place} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row w-full gap-5 text-white mt-10">
          <div className="relative w-full">
            <Image
              className="w-full"
              src={"/flight-img.png"}
              alt={"a"}
              width={100}
              height={100}
            />
            <div className="text absolute bottom-10 md:left-[20%] text-center">
              <h1 className="text-2xl">Flight</h1>
              <p className="text-white/80 mb-3">
                Search Flights & Places Hire to our most popular destinations
              </p>
              <PrimaryButton text="Show Flight" />
            </div>
          </div>
          <div className="relative w-full">
            <Image
              className="w-full"
              src={"/hotels-img.png"}
              alt={"a"}
              width={100}
              height={100}
            />
            <div className="text absolute bottom-10 md:left-[20%] text-center">
              <h1 className="text-2xl">Hotels</h1>
              <p className="text-white/80 mb-3">
                Search Hotels & Places Hire to our most popular destinations
              </p>
              <PrimaryButton text="Show Hotels" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanTripSection;
