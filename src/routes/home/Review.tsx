import {Center, Flex, Heading, Stack } from "@chakra-ui/react";
import { CardReview } from "../../components/CardReview";
import { DummyReview } from "../../constant/review";


const Review = () => {
    return (
        <Center>
            <Stack margin={"4rem"} gap={2}>
            <Heading marginLeft={10} fontSize={{base:"lg", lg: "4xl"}}>Pendapat orang-orang tentang Perumdam Tirta Argapura</Heading>
            <Flex flexDir={{base: "column", lg: "row"}} overflow={"auto"}>
                {DummyReview.map((item, idx) => (
                    <CardReview image={item.image} nama={item.name} job={item.job} review={item.review} key={idx}/>
                ))}
            </Flex>
            </Stack>
        </Center>
    )
}

export default Review;