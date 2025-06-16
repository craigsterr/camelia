import NavBar from "@/components/custom/NavBar";
import Gallery from "@/components/custom/Gallery";
import Footer from "@/components/custom/Footer";

export default function Portfolio() {
  const buttonStyle =
    "bg-gray-300 rounded-xl py-2 px-4 transition-transform duration-300 hover:scale-115";
  return (
    <>
      <NavBar />
      <div className="flex flex-col w-[80%] lg:w-[50%] mx-auto text-center lg:text-left space-y-10 lg:space-y-30">
        <div />
        <div className="mx-auto space-y-20 animate__animated animate__bounceInUp">
          <div className="flex flex-col space-y-5 lg:space-y-10 lg:flex-row justify-between items-center">
            <h1 className="">Our Work</h1>
            <div className="text-xl lg:text-3xl flex justify-end gap-5">
              <button className={buttonStyle}>Craig</button>
              {/* <button className={buttonStyle}>Leah</button> */}
            </div>
          </div>
          <p>
            I&apos;m <strong>Craig</strong> a web development specialist with a{" "}
            <strong>Computer Science</strong> degree from the{" "}
            <strong>University of Illinois</strong>, consistently ranked among
            the <strong>top five computer science programs</strong> in the{" "}
            <strong>nation</strong>! I&apos;m also a{" "}
            <strong>freelance artist</strong> with a background in 3D modelling,
            digital art, and animation with a passion for vibrant designs that{" "}
            <strong>POP</strong>.
            <br />
            <br />
            When it comes to jobs, I work <strong>hard</strong> and I work{" "}
            <strong>quick</strong>.
          </p>
        </div>
        <div id="gallery" className="">
          <Gallery />
        </div>
      </div>
      <div className="mt-50">
        <Footer />
      </div>
    </>
  );
}
