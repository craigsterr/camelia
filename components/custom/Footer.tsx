import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-white">
        <div className=" flex flex-grid justify-between p-10 sm:w-[60%] lg:w-[70%] gap-10 mx-auto">
          <div className="space-y-10 lg:space-y-10">
            <h2>Let&apos;s talk:</h2>
            <div>
              <p>
                <strong>Email:</strong>
              </p>
              <p>contact@camelia.work</p>
            </div>
            <div>
              <p>
                <strong>Phone:</strong>
              </p>
              <p>(708) 420-7902</p>
            </div>
          </div>
          <div className="space-y-5">
            <h2>Check us out:</h2>
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
      </div>
    </>
  );
}
