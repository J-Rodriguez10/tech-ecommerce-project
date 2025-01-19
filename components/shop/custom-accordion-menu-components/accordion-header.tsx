import Caret from "@/components/svgs/navbar-svgs/caret-svg";
import * as Accordion from "@radix-ui/react-accordion"


interface AccordionToggleHeaderProps {
  label: string; // The label text for the accordion item
}

function AccordionToggleHeader({ label }:AccordionToggleHeaderProps) {
  return (
    <Accordion.Header className="mb-[0.5rem]">
      <Accordion.Trigger className="flex w-full items-center justify-between">
        <p className="text-[1.5rem] font-[400]">{label}</p>
        <Caret direction="none" className="caret-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

export default AccordionToggleHeader;