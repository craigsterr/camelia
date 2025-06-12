"use client";

import Image from "next/image";
import NavBar from "@/components/custom/NavBar";
import "animate.css";
import "./globals.css";
import Accordion from "@/components/custom/Accordion";
import Footer from "@/components/custom/Footer";

import { useEffect, useState } from "react";

export default function Home() {
  const sectionStyle =
    "hover:scale-105 transition-transform animate__animated animate__bounceInUp";
  const leftSectionStyle = "max-w-[75%]  " + sectionStyle;
  const rightSectionStyle = "transition-transform duration-200 " + sectionStyle;
  const h3Style = "";
  const whoAreWeStyle = "lg:ml-[-5vw] text-center lg:text-left";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      console.log(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="flex z-[-1]">
        {/* <Image
          src="./images/flower.png"
          alt="Coming soon"
          width={600}
          height={400}
          className={"fixed bottom-0 opacity-10"}
          style={{ transform: `rotate(${scrollY / 6}deg)` }}
        />
        <Image
          src="./images/flower.png"
          alt="Coming soon"
          width={600}
          height={400}
          className={"fixed right-0 opacity-10"}
          style={{ transform: `rotate(${scrollY / 6 + 100}deg)` }}
        /> */}
      </div>
      <NavBar />
      <main className="space-y-30 max-w-[80%] flex flex-col mx-auto lg:space-y-50 lg:max-w-[60%]">
        <div />
        <section id="opening-statement" className={leftSectionStyle}>
          <h3 className={h3Style}>
            Opening statement that will <strong>attract users</strong> and
            establish <strong>brand personality</strong>.
          </h3>
        </section>
        <section
          id="who-are-we"
          className={`${rightSectionStyle} space-y-10 lg:flex lg:flex-grid lg:gap-10 lg:ml-[-10vw] lg:mr-[-10vw]`}
        >
          <div className="lg:w-[50%] lg:my-auto mx-auto z-[-1]">
            <Image
              src="./images/placeholder.svg"
              alt="Coming soon"
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-lg animate__animated animate__rubberBand hover:scale-105 transition-transform duration-400"
            />
          </div>
          <div className="flex-1 lg:my-auto space-y-5">
            <h2 className={whoAreWeStyle}>
              <b>Who are we?</b>
            </h2>
            <p className="text-center">
              We&apos;re a <strong>two-person</strong> web development team with
              a mission: to build fast, elegant, and user-focused websites and
              applications. From <strong>startups</strong> to{" "}
              <strong>established brands</strong>, we help ideas come to life
              through clean code, beautiful design, and thoughtful
              collaboration.
            </p>
          </div>
        </section>
        <section id="our-mission" className={leftSectionStyle}>
          <h3 className={h3Style}>
            Our mission is to create meaningful
            <strong> digital experiences</strong> that <strong>resonate</strong>{" "}
            with users and foster long-term relationships.
          </h3>
        </section>
        <section id="collapsable" className={sectionStyle + " space-y-10"}>
          <h2>Services we offer:</h2>
          <Accordion />
        </section>
      </main>
      <div className="mt-50">
        <Footer />
      </div>
    </>
  );
}
