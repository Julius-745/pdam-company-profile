import { Button, Center, Flex, HStack, Heading, Stack, Text, Image} from "@chakra-ui/react"

const Aboutus = () => {
    return (
        <Center>
        <HStack gap={20} padding={20} bgColor={"#5963F5"} w={"100%"}>
            <Stack gap={5}>
                <Heading color={"white"}>Perumdam Tirta Argapura Memberikan Pelayanan Yang Terbaik</Heading>
                <Text color={"white"} maxW={"70%"}>Kami menjamin kami memberikan pelayanan terbaik untuk setiap pengguna air perumdam tirta argapura.</Text>
                <Flex flexDirection={{base: "column", lg: "row"}} gap={10}>
                    <Button  backgroundColor="white" color={"black"} variant={"solid"} >Tentang Kami</Button>
                </Flex>
            </Stack>
            <Stack display={{base: "none", lg: "block"}}>
                <Image src="https://ik.imagekit.io/uavheojaq/PDAM/Company%20Profile/aboutPDAM.png?updatedAt=1711338344036" alt=""/>
            </Stack>
        </HStack>
        </Center>
    )
}

export default Aboutus;