"use client";

import Image from "next/image";
import NavBar from "@/components/custom/NavBar";
import "animate.css";
import "./globals.css";
import Accordion from "@/components/custom/Accordion";
import Footer from "@/components/custom/Footer";
import SmoothScroll from "@/components/custom/SmoothScroll";

// import { useEffect, useState } from "react";

export default function Home() {
  const sectionStyle =
    " transition-transform animate__animated animate__fadeInUp";
  const rightSectionStyle = "transition-transform duration-200 " + sectionStyle;
  const whoAreWeStyle =
    "lg:ml-[-5vw] lg:text-left lg:text-5xl font-semibold mt-10";
  return (
    <>
      <SmoothScroll />
      <div className=" animate__animated animate__fadeInDown">
        <NavBar />
      </div>

      <main className="space-y-30 max-w-[80%] flex flex-col mx-auto lg:space-y-25 lg:max-w-[60%]">
        <div />
        <section id="opening-statement" className={" flex items-center "}>
          <h1 className="transition-transform duration-200 hover:scale-105">
            Welcome to <span className="font-black">camelia</span>. Let&apos;s
            get you <span className="font-semibold">growing</span>.
          </h1>
          <div className="flex">
            <Image
              src="./images/flower_placeholder.png"
              alt="Coming soon"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section
          id="who-are-we"
          className={`${rightSectionStyle} lg:flex lg:flex-grid lg:gap-10 lg:ml-[-7vw] lg:mr-[2vw]`}
        >
          <div className="lg:w-[60%] lg:my-auto mx-auto z-[-1]">
            <Image
              src="./images/placeholder.svg"
              alt="Coming soon"
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="flex-1 lg:my-auto space-y-5">
            <h2 className={whoAreWeStyle}>Who are we?</h2>
            <p className="lg:text-left">
              We're Craig and Leah. A two-person web development team with
              extensive art and technology backgrounds and a passion for{" "}
              <b>sleek and modern design</b>.
            </p>
          </div>
        </section>
        <section
          id="collapsable"
          className={sectionStyle + " lg:mt-50 space-y-10"}
        >
          <h3>Services we offer:</h3>
          <Accordion />
        </section>
      </main>
      <div className="mt-50">
        <Footer />
      </div>
    </>
  );
}
