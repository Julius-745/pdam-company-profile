import { VStack, Image, Text, Heading, Stack, HStack, Flex, Center, Button, Link, Card} from "@chakra-ui/react";



const Banner = () => {

    return (
        <Center>
        <HStack gap={20} marginX={5}>
            <Stack gap={5}>
                <Heading color={"black"}>Perumdam Tirta Argapura</Heading>
                <Text color={"black"}>Air bersih yang lebih murni dan lebih baik untuk seluruh kebutuhan rumah tangga anda.</Text>
                <HStack gap={10}>
                    <Button color={"black"} colorScheme="blue" variant={"solid"}>Daftar Pemasangan</Button>
                    <Link color={"black"} textDecor={"underline"}>Pelajari Lebih lanjut</Link>
                </HStack>
                <Card backgroundColor={"white"} boxShadow={"-12px 14px 5px 0px rgba(0,0,0,1)"} border={1} borderColor={"black"} variant={"outline"}>
                    <Stack margin={5} alignItems={"center"}>
                    <Heading color={"black"}>22.000+</Heading>
                    <Text color={"black"} fontSize={"20px"} fontWeight={"500"}>Pelanggan Aktif</Text>
                    </Stack>
                </Card>
            </Stack>
            <Stack><Image src="https://ik.imagekit.io/uavheojaq/PDAM/Company%20Profile/headeroption.png?updatedAt=1710998689064" alt=""/></Stack>
        </HStack>
        </Center>
    )

}

export default Banner;