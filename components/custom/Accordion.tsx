import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "animate.css";

export default function AccordionDemo() {
  const animation = "";
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className={animation}>
          Web Design and Development
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We build responsive, performance-optimized websites tailored to your
            brand and business goals. Whether it&apos;s a sleek landing page or
            a dynamic web app, we ensure your site is fast, accessible, and
            user-friendly.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className={animation}>
          Site Critiques
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer honest, constructive feedback on your current website —
            from UI/UX design to performance and SEO. You&apos;ll receive clear,
            actionable advice on how to elevate your online presence.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className={animation}>
          Design Consulting
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Get expert guidance on visual design, branding, layout systems, and
            usability. We work with your existing team or independently to align
            your product’s look and feel with its purpose and audience.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className={animation}>
          Brand Expansion
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We help growing businesses scale their digital brand with cohesive
            design systems, scalable web platforms, and strategic design
            thinking — ensuring every interaction feels consistent and
            intentional.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
