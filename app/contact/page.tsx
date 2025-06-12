import { ContactCard } from "@/components/custom/ContactCard";
import NavBar from "@/components/custom/NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center w-[80%] lg:w-[70%] mx-auto text-center lg:text-left space-y-10 lg:space-y-30">
        <div></div>
        <ContactCard />
      </div>
    </>
  );
}
