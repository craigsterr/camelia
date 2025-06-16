"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const craigPortfolio = [
  {
    title: "Spyfall Unlimited",
    description: "A clone of the social deduction game Spyfall.",
    image: "./images/spyfall.png",
    link: "https://spyfall.craigo.live",
  },
  {
    title: "News Template Presets",
    description: "A preset Firefox extension to automate article items.",
    image: "./images/news.png",
    link: "https://addons.mozilla.org/en-US/firefox/addon/news-template-presets/",
  },
  {
    title: "Productivity Slime",
    description:
      "A gamified preset Firefox extension to track time spent on unproductive tabs.",
    image: "./images/slime.png",
    link: "https://addons.mozilla.org/en-US/firefox/addon/productivity-slime/",
  },
  {
    title: "Webbie Pet",
    description: "A tamagotchi style game with custom illustrations.",
    image: "./images/webbie.png",
    link: "https://craigsterr.github.io/webbie-pet",
  },
  {
    title: "Kitty Clicker",
    description: "Clicker game entirely made in React, HTML and Javascript.",
    image: "./images/kitty.png",
    link: "https://craigsterr.github.io/kitty-clicker",
  },
  {
    title: "Portfolio Website",
    description: "",
    image: "./images/portfolio.png",
    link: "https://craigo.live",
  },
];

const leahPortfolio = [
  {
    title: "Roam.IO Redesign",
    description:
      "A website and brand redesign to improve usability and streamlining freelancer-client interactions for Roam.",
    image: "./images/roamio.png",
    link: "https:///www.useroam.io/",
  },
  {
    title: "NASCAR Web App",
    description:
      "A web app to engage and entertain NASCAR audience during the 2024 Chicago Summer Street Race.",
    image: "./images/nascar.png",
    link: "https://iamnascarui.azurewebsites.net/",
  },
  {
    title: "CampusNav",
    description:
      "A mobile navigational interface that allows users to fulfill their campus academic and social life.",
    image: "./images/campusnav.png",
    link: "https://www.jayleelambino.com/not-too-late",
  },
  {
    title: "NotTooLate",
    description: "A self-service kiosk aimed to reduce surplus food waste.",
    image: "./images/toolate.png",
    link: "https://www.figma.com/proto/igbeLG49eZ9P8X8mptvNWa/Map?node-id=117-212&p=f&t=ePFzeb2tPk9BySD8-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=117%3A212&show-proto-sidebar=1",
  },
];

export default function Gallery({ toggle }: { toggle: boolean }) {
  const [activePortfolio, setActivePortfolio] = useState(craigPortfolio);
  useEffect(() => {
    setActivePortfolio(toggle ? leahPortfolio : craigPortfolio);
  }, [toggle]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {activePortfolio.map((project, i) => (
        <a
          key={i}
          href={project.link}
          className="relative flex flex-col md:flex-row bg-transparent md:bg-white rounded-xl shadow-lg overflow-hidden group h-[300px] hover:scale-[1.02] transition-transform"
        >
          {/* Left Side - Text Content */}
          <div className=" md:w-3/5 p-6 flex flex-col justify-between h-[300px]">
            <p className="text-2xl text-gray-900">{project.title}</p>
            <p className="text-gray-500 text-lg italic">
              {project.description}
            </p>
          </div>

          {/* Right Side - Image Blur Background */}
          <div className="relative md:w-2/5 h-48 md:h-auto">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
