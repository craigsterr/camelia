import Image from "next/image";

export default function Gallery() {
  const sectionStyle =
    "hover:scale-105 transition-transform animate__animated animate__bounceInUp";

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
      description:
        "My personal portfolio website with all of my information including my resume, LinkedIn and Github",
      image: "./images/portfolio.png",
      link: "https://craigo.live",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {craigPortfolio.map((project, i) => (
        <a
          key={i}
          href={project.link}
          className="relative flex flex-row bg-white rounded-xl shadow-lg overflow-hidden group hover:scale-[1.02] transition-transform"
        >
          {/* Left Side - Text Content */}
          <div className="w-3/5 p-6 flex flex-col justify-center h-[300px]">
            <p className="text-xl text-gray-900 mb-40">{project.title}</p>
            <p className="text-gray-500 text-sm">{project.description}</p>
          </div>

          {/* Right Side - Image Blur Background */}
          <div className="relative w-2/5 h-48 md:h-auto">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover blur-xs"
              sizes="320px"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
