import {
    Container,
    Flex,
    Image,
    Link,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import logo from "../assets/logo.png";
  import { FooterNav } from "../constant/navigation";
  //import { useTranslation } from "react-i18next";
  
  const Footer = () => {
    //const { t } = useTranslation();
  
    return (
      <Container minW={"100%"} py={20} backgroundColor={"#051830"} px={10}>
        <Flex justifyContent={"space-between"} gap={10} direction={{base:'column', md:'row'}} >
          <VStack
            h={"inherit"}
            gap={8}
            maxW={{base:"", lg: "20%"}}
            alignItems={"left"}
          >
            <Flex>
              <Image
                mx={{ base: 0, md: 0, }}
                src={logo}
                alt={"Logo"}
                w={{ base: 24, md: "auto" }}
              />
              <Text mt={5} color={"white"}>{"Perumdam Tirta Argapura"}</Text>
            </Flex>
            <Text color={"white"}>Advance your life with comprehensive program together with Perumdam Tirta Argapura</Text>
            <Text fontSize={"12px"} color={"white"}>{"Copyright Perumdam Tirta Argapura"}</Text>
          </VStack>

          <VStack maxW={{base:"", lg: "20%"}} alignItems={"left"} gap={8}>
            <Text fontSize={"24px"} color={"white"}>Kontak</Text>
            <Text color={"white"}>perumdam.argapura@gmail.com</Text>
            <Text color={"white"}>Jl. Raya Dringu, Krajan, Tamansari, Kec. Dringu, Kabupaten Probolinggo, Jawa Timur</Text>
            <Text color={"white"}>+62 264 2185 605</Text>
          </VStack>
  
          <VStack gap={5} alignItems={"left"} mt={{base:20, md:0}}>
          <Text fontSize={"24px"} color={"white"}>Pelayanan</Text>
            {FooterNav.map((link) => (
              <Link display={"block"} href={link.link} color={"#FFBFFC"}>
                <Text fontSize={"20px"} color={"white"}>
                  {link.name}
                </Text>
              </Link>
            ))}
          </VStack>
        </Flex>
      </Container>
    );
  };
  
  export default Footer;
  