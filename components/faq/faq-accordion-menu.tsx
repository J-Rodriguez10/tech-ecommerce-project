"use client"

import * as Accordion from "@radix-ui/react-accordion"

export type FaqData = {
  question: string // Question or statement
  answer: string // Answer to question or statement
}

/**
 * Renders an accordion menu displaying FAQ items. Each FAQ item consists of a question
 * that can be expanded to reveal the corresponding answer. The menu is collapsible with 
 * an option to expand each question individually.
 */

function FaqAccordionMenu({
  faqData,
  menuHeader
}: {
  faqData: FaqData[]
  menuHeader: string
}) {
  return (
    <div className="text-darkGray">
      <h2 className="mb-4 text-[2.25rem] font-[400] capitalize xs:text-[1.9rem]">
        {menuHeader}
      </h2>
      <Accordion.Root className="pl-[1.6rem]" type="single" collapsible>
        {faqData.map((data, i) => (
          <Accordion.Item key={i} value={`item-${i}`}>
            {/* Accordion Item Header */}
            <Accordion.Header className="mb-[2rem] !text-left text-[1.45rem] font-[400] s:text-[1.3rem]">
              <Accordion.Trigger className="!text-left">
                {data.question} {/* Dynamically render question */}
              </Accordion.Trigger>
            </Accordion.Header>

            {/* Dropdown content */}
            <Accordion.Content className="mb-[2rem]">
              {data.answer} {/* Dynamically render answer */}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}

export default FaqAccordionMenu
