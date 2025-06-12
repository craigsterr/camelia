import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full border-t-2 bg-gray-300/25 border-gray-300 flex flex-grid justify-center gap-20 p-10">
        <div className="space-y-10 ">
          <h2>Let&apos;s talk</h2>
          <div>
            <h3>Email:</h3>
            <p>camelliaemail@gmail.com</p>
          </div>
          <div>
            <h3>Phone:</h3>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div className="space-y-5">
          <h2>Check us out</h2>
          <div className="lg:flex lg:flex-grid lg:gap-5 lg:space-y-0 space-y-5">
            <Image
              className="lg:w-30 w-20"
              src={`/images/insta-logo.webp`}
              alt="Instagram Logo"
              width={100}
              height={100}
            />{" "}
            <Image
              className="lg:w-30 w-20"
              src={`/images/linkedin-logo.webp`}
              alt="LinkedIn Logo"
              width={100}
              height={100}
              style={{ objectFit: "contain" }} // Ensures no distortion
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
