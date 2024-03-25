import {  Heading, Center, Image, Flex, Box,} from "@chakra-ui/react";



const Product = () => {

    return (
        <Center>
        <Flex flexDir={{base: "column", lg: "row"}} gap={5} margin={20}>
            <Center>
                <Heading>Our Product Is Coming Soon</Heading>
            </Center>
            <Box>
                <Image src="https://ik.imagekit.io/uavheojaq/PDAM/Company%20Profile/apps-mockup.png?updatedAt=1711078001270" alt=""/>
            </Box>
        </Flex>
        </Center>
    )

}

export default Product;