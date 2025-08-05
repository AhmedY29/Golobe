import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-[#8DD3BB] mt-20 md:mt-60 pt-10 md:pt-50 relative">
      <div className="newest w-[90%] hidden md:flex justify-between gap-10 bg-[#CDEAE1] rounded-2xl p-5 absolute top-[-10rem]">
        <div className="text flex flex-col justify-between">
          <h1 className="font-bold text-5xl">
            Subscribe <br /> Newsletter
          </h1>
          <div className="">
            <h1 className="text-xl">The Travel</h1>
            <h1>
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </h1>
          </div>
          <div className="action flex items-center w-full">
            <input
              className="p-2 border-2 w-100"
              type="text"
              placeholder="Enter Your Email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
        <div className="image">
          <Image
            src={"/mailbox.svg"}
            alt="Mailbox image"
            className="object-contain"
            width={350}
            height={80}
          />
        </div>
      </div>
      <div className="w-[90%] flex flex-col md:flex-row flex-wrap gap-35">
        <div className="logo flex justify-center md:justify-start">
          <Image src={"/blackLogo.svg"} alt="Logo" width={90} height={80} />
        </div>
        <div className="links grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          <div className="destination">
            <h1 className="font-bold">Our Destination</h1>
            <h4>Riyadh</h4>
            <h4>Dubai</h4>
            <h4>London</h4>
            <h4>France</h4>
          </div>
          <div className="activity">
            <h1 className="font-bold">Our Activity</h1>
            <h4>Northern Lights</h4>
            <h4>Cruising & sailing</h4>
            <h4>Multi-activities</h4>
            <h4>Kayaing</h4>
          </div>
          <div className="blog">
            <h1 className="font-bold">Travel Blog</h1>
            <h4>Bali Travel Guide</h4>
            <h4>Sri Lanks Travel Guide</h4>
            <h4>Peru Travel Guide</h4>
            <h4>Bali Travel Guide</h4>
          </div>
          <div className="about">
            <h1 className="font-bold">About us</h1>
            <h4>Our Story</h4>
            <h4>Work with us</h4>
          </div>
          <div className="contact">
            <h1 className="font-bold">Contact us</h1>
            <h4>Our Story</h4>
            <h4>Work with us</h4>
          </div>
        </div>
      </div>
      <div className="by my-3 w-full text-center">
        <hr />
        <h1 className="mt-3">
          Made By{" "}
          <a
            href="https://github.com/AhmedY29"
            target="_blank"
            className="font-black uppercase underline hover:no-underline"
          >
            Ahmed Alsaleh
          </a>
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
