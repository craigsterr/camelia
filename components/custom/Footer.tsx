import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full border-t-2 bg-gray-100 border-gray-300 flex flex-grid justify-center gap-10 lg:gap-40 p-10">
        <div className="space-y-10 lg:space-y-10 ">
          <h2>Let&apos;s talk</h2>
          <div>
            <p>
              <strong>Email:</strong>
            </p>
            <p>camelia.contact.work@gmail.com</p>
          </div>
          <div>
            <p>
              <strong>Phone:</strong>
            </p>
            <p>(708) 420-7902</p>
          </div>
        </div>
        <div className="space-y-5">
          <h2>Check us out</h2>
          <div className="lg:flex lg:flex-grid lg:gap-5 lg:space-y-0 space-y-5">
            <Image
              className="lg:w-30 w-20"
              src={`./images/insta-logo.webp`}
              alt="Instagram Logo"
              width={100}
              height={100}
            />{" "}
            <Image
              className="lg:w-30 w-20"
              src={`./images/linkedin-logo.webp`}
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
