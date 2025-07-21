"use client";

import NavBar from "@/components/custom/NavBar";
import Gallery from "@/components/custom/Gallery";
import Footer from "@/components/custom/Footer";
import SmoothScroll from "@/components/custom/SmoothScroll";
import { useState } from "react";

export default function Portfolio() {
  const buttonStyle =
    " rounded py-2 px-4 transition-all duration-300 cursor-pointer";
  const [buttonToggle, setButtonToggle] = useState(false);

  return (
    <>
      <SmoothScroll />
      <NavBar />
      <div className="flex flex-col w-[80%] lg:w-[70%] mx-auto text-center lg:text-left space-y-10 lg:space-y-30">
        <div />
        <div className="mx-auto space-y-0 w-full">
          <div className="flex flex-col space-y-5 lg:space-y-10 lg:flex-row justify-between items-center">
            <h1 className="">Our Work</h1>
            <div className="text-xl lg:text-3xl flex justify-end gap-5 mb-4">
              <button
                onClick={() => setButtonToggle(false)}
                className={`${buttonStyle} ${
                  !buttonToggle
                    ? "bg-black text-white"
                    : " bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Craig
              </button>
              <button
                onClick={() => setButtonToggle(true)}
                className={`${buttonStyle} ${
                  buttonToggle
                    ? "bg-black text-white"
                    : " bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Leah
              </button>
            </div>
          </div>
          {buttonToggle ? (
            <p>
              I'm Leah, a solution oriented UX/UI designer and college student.
              A determined minimalist plagued with a maximalist mind that swears
              by organization, thorough communication and an open mind to be the
              recipe for leading the creation of beautiful, human-centered
              designs. On the side I pursue other mediums of art like graphic,
              fashion and illustrative design.{" "}
            </p>
          ) : (
            <p>
              I&apos;m Craig, a web development specialist with a Computer
              Science degree from the University of Illinois, consistently
              ranked among the top five computer science programs in the nation.
              I&apos;m also a freelance artist with a background in 3D
              modelling, digital art, and animation with a passion for vibrant
              designs that pop. When it comes to jobs, I work hard and I work
              quick.{" "}
            </p>
          )}
        </div>
        <div id="gallery" className="">
          <Gallery toggle={buttonToggle} />
        </div>
      </div>
      <div className="mt-50">
        <Footer />
      </div>
    </>
  );
}
