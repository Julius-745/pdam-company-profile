import logo from "../assets/logo.png";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { INavigation } from "../constant/navigation";
import MenuDrawer from "./menuDrawer";
import { useTranslation } from "react-i18next";

interface INavbar {
  data: INavigation[];
}

const MenuList: React.FC<INavbar> = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => {
        return (
        <Link key={idx} href={item.link} _hover={{ textDecoration: "none" }}>
          <Text
            fontSize="md"
            fontWeight={"500"}
            color={"black"}
          >
            {item.name}
          </Text>
        </Link>
        )
      })}
    </>
  );
};

const Navbar: React.FC<INavbar> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Center>
      <Stack
        as={"nav"}
        w={"full"}
        position={"absolute"}
        mt={5}
        top={"0"}
        justifyContent={"center"}
      >
        <Container minW={"100%"} px={10}>
          <Box display={"flex"} alignItems={"center"}>
            <Box
              display={"flex"}
              justifyContent={{ base: "start", lg: "end" }}
              flex={1}
            >
              <HStack marginRight={"2rem"}>
                <Image
                  mx={{ base: 4, lg: 0 }}
                  src={logo}
                  alt={"Logo"}
                  w={{ base: 24, lg: "auto" }}
                />
                <Text color={"black"} fontWeight={"bold"} fontSize={{base: "xs",lg: "2xl"}}>Perumdam Tirta Argapura</Text>
              </HStack>
              <Stack
                flex={1}
                justify={"start"}
                align={"center"}
                direction={"row"}
                spacing={"1rem"}
                display={{ base: "none", lg: "flex" }}
              >
                <MenuList data={data} />
              </Stack>
            </Box>
            <Stack
              flex={1}
              justify={"end"}
              align={"center"}
              direction={"row"}
              spacing={"4rem"}
              display={{ base: "none", lg: "flex" }}
            >
              <Button type="submit" onClick={() => console.log("test")} color={"white"} backgroundColor={"#1877F2"}>
                {"Hubungi Kami"}
              </Button>
            </Stack>
            <MenuDrawer>
              <MenuList data={data} />
              <Button width={"full"} type="submit" mt={8} onClick={() => console.log("test")}>
                {t("logout.title")}
              </Button>
            </MenuDrawer>
          </Box>
        </Container>
        <Divider size={"lg"} backgroundColor={"#BAD6FB"} height={0.5} orientation="horizontal" variant={"solid"} mt={5}/>
      </Stack>
    </Center>
  );
};

export default Navbar;
