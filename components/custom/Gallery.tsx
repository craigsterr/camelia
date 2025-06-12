import Image from "next/image";

export default function Gallery() {
  const sectionStyle =
    "hover:scale-105 transition-transform animate__animated animate__bounceInUp";

  const craigPortfolio = [
    {
      title: "Spyfall Unlimited (WIP)",
      description:
        "A clone of the social deduction game Spyfall using Next.js and Supabase for realtime lobby handling.",
      image: "./images/spyfall.png",
      link: "https://github.com/craigsterr/spyfall",
    },
    {
      title: "News Template Presets",
      description:
        "A preset Firefox extension to automate article items when I worked as a news reporter.",
      image: "./images/news.png",
      link: "https://addons.mozilla.org/en-US/firefox/addon/news-template-presets/",
    },
    {
      title: "Productivity Slime",
      description:
        "A preset Firefox extension to track time spent on unproductive tabs in the style of a video game slime.",
      image: "./images/slime.png",
      link: "https://craigsterr.github.io/kitty-clicker",
    },
    {
      title: "Webbie Pet",
      description:
        "A tamagotchi style game created with JavaScript, HTML5 Canvas, SASS, Next.js, and Node.js.",
      image: "./images/webbie.png",
      link: "https://craigsterr.github.io/webbie-pet",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website with all of my information including my resume, LinkedIn and Github",
      image: "./images/portfolio.png",
      link: "https://craigo.live",
    },
    {
      title: "Kitty Clicker",
      description:
        "A clicker game made entirely in React, HTML, and Javascript.",
      image: "./images/kitty.png",
      link: "https://craigsterr.github.io/kitty-clicker",
    },
    {
      title: "camellia",
      description: "What are the odds!!!!!!!!!!!",
      image: "./images/camellia.png",
      link: "https://craigsterr.github.io/camellia",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
        {[...Array(craigPortfolio.length)].map((_, i) => (
          <div
            key={i}
            className={
              "bg-gray-300 flex justify-center text-lg rounded-2xl " +
              sectionStyle
            }
          >
            <a href={craigPortfolio[i].link}>
              <span>
                <div className="absolute inset-0 z-[-1]">
                  <Image
                    src={craigPortfolio[i].image}
                    alt={craigPortfolio[i].title}
                    fill
                    className="object-cover opacity-30 rounded-2xl"
                    sizes="320px"
                  />
                </div>
                <div className="p-5 flex flex-row gap-4">
                  <div className="space-y-5 p-2">
                    <h2 className="text-4xl drop-shadow-2xl">
                      {craigPortfolio[i] ? craigPortfolio[i].title : "Project"}
                    </h2>
                    <p className="text-xl ">{craigPortfolio[i].description}</p>
                  </div>
                  <Image
                    src={craigPortfolio[i].image}
                    alt={craigPortfolio[i].title}
                    className="invisible lg:visible object-contain rounded-2xl w-[100%]"
                    width={300}
                    height={300}
                  />
                </div>
              </span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
