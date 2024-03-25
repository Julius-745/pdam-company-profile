import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider } from "@chakra-ui/react";

export interface IFAQ {
    question: string;
    answer: string;
}

export const AccordionChild: React.FC<IFAQ> = ({question, answer}) => {
    return (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontSize={"lg"} color={"#1877F2"}>
          {question}
        </Box>
        <AccordionIcon color={"#1877F2"}/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {answer}
    </AccordionPanel>
    <Divider size={"md"} backgroundColor={"black"} height={0.2} orientation="horizontal" variant={"solid"} mt={3}/>
  </AccordionItem>
    )
}