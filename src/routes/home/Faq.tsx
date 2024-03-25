import { Accordion, Center, Heading, Stack, Text } from "@chakra-ui/react"
import { AccordionChild } from "../../components/FaqAccordion";
import { DummyFaq } from "../../constant/faq";


const Faq = () => {
    return (
        <Center>
            <Stack marginY={10} gap={10}>
            <Stack textAlign={"center"}>
                <Heading>Frequently Asked Questions</Heading>
                <Text fontSize={"xl"} maxW={"70%"} alignSelf={"center"}>Pertanyaan-pertanyaan yang sering ditanyakan oleh calon pengguna & pengguna PDAM</Text>
            </Stack>
            <Stack>
                <Accordion defaultIndex={[0]} allowMultiple>
                {DummyFaq.map((item, idx) => (
                    <AccordionChild question={item.question} answer={item.answer} key={idx}/>
                ))}
                </Accordion>
            </Stack>
            </Stack>
        </Center>
    )
}

export default Faq;