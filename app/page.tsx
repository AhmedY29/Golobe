"use client";
import FilterHero from "@/components/FilterHero";
import Hero from "@/components/Hero";
import PlanTripSection from "@/components/PlanTripSection";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="homepage">
      <Hero />
      <FilterHero />
      <PlanTripSection />
      <Reviews />
    </div>
  );
}
