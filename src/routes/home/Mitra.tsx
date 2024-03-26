import {VStack, Text, Image, Flex } from "@chakra-ui/react";
import {MitraData} from "../../constant/mitra";

const Mitra = () => {
    return (
        <VStack>
            <Text>Mitra Kami</Text>
            <Flex flexDir={{base: "column", lg: "row"}} justifyContent={"space-around"} minW={"90%"} gap={10}>
                {MitraData.map((item, key) => (
                    <Image src={item.image} key={key} w={{base: "15rem", lg: "12rem"}} alignSelf={"center"}/>
                ))}
            </Flex>
        </VStack>
    )
}

export default Mitra;