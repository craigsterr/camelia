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
  const leftSectionStyle = "max-w-[75%]  " + sectionStyle;
  const rightSectionStyle = "transition-transform duration-200 " + sectionStyle;
  const h3Style = "";
  const whoAreWeStyle = "lg:ml-[-5vw] lg:text-left";
  // const [rotation, setRotation] = useState(0);

  // useEffect(() => {
  //   let start: number | null = null;
  //   const duration = 1500; // in ms
  //   const initialRotation = 0;
  //   const targetRotation = 360;

  //   function easeInOut(t: number): number {
  //     return -(Math.cos(Math.PI * t) - 1) / 2;
  //   }

  //   function animate(time: number) {
  //     if (start === null) start = time;
  //     const elapsed = time - start;
  //     const progress = Math.min(elapsed / duration, 1);
  //     const eased = easeInOut(progress);
  //     setRotation(initialRotation + (targetRotation - initialRotation) * eased);

  //     if (progress < 1) {
  //       requestAnimationFrame(animate);
  //     }
  //   }

  //   requestAnimationFrame(animate);
  // }, []);

  return (
    <>
      <SmoothScroll />
      <div className="flex z-[-1]">
        <Image
          src="./images/flower.png"
          alt="Coming soon"
          width={400}
          height={400}
          className={"absolute right-0 opacity-10"}
          // style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
      <div className=" animate__animated animate__fadeInDown">
        <NavBar />
      </div>

      <main className="space-y-30 max-w-[80%] flex flex-col mx-auto lg:space-y-50 lg:max-w-[70%]">
        <div />
        <section
          id="opening-statement"
          className={"hover:scale-105 " + leftSectionStyle}
        >
          <h3 className={h3Style}>
            Welcome to <strong>camelia</strong>. Let&apos;s get you{" "}
            <strong>growing</strong>.
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
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="flex-1 lg:my-auto space-y-5">
            <h2 className={whoAreWeStyle}>
              <b>Who are we?</b>
            </h2>
            <p className="lg:text-left">
              We're Craig and Leah. A two-person web development team with
              extensive art and technology backgrounds and a passion for{" "}
              <b>sleek and human-centered design</b>. Through co-design and
              clear-communication our websites are not only stylish, but
              personalized to your needs. Whether you're an established business
              or growing startup, we're here along the way to help you grow.{" "}
            </p>
          </div>
        </section>
        <section id="our-mission" className={leftSectionStyle}>
          <h3 className={h3Style}>
            All the bells and whistles at a fraction of the price and 10x times
            the speed of big agencies and typical startups.
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
