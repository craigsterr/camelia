import NavBar from "@/components/custom/NavBar";
import Gallery from "@/components/custom/Gallery";
import Footer from "@/components/custom/Footer";

export default function Portfolio() {
  const buttonStyle =
    "bg-gray-300 rounded-xl py-2 px-4 transition-transform duration-300 hover:scale-115";
  return (
    <>
      <NavBar />
      <div className="flex flex-col w-[80%] lg:w-[70%] mx-auto text-center lg:text-left space-y-10 lg:space-y-30">
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
            Our background in art influences how we approach every project —
            with attention to detail, balance, and visual clarity. That creative
            foundation helps us design and build websites that are not only
            functional but visually thoughtful. We aim to bring a sense of craft
            to the digital space, where form and function work together
            seamlessly.
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
