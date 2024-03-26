import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { Navigation } from "../constant/navigation";
import Footer from "./Footer";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  return (
    <Box overflow={"auto"} minW={"100%"}>
      <Navbar data={Navigation} />
      <Stack mt={60} gap={10}>{props.children}</Stack>
      <Footer />
    </Box>
  );
};

export default Layout;
