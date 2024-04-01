import { Box, Modal, ModalCloseButton, ModalContent, Stack, Image, useDisclosure, ModalOverlay } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Navigation } from "../constant/navigation";
import Footer from "./Footer";
import { DummyAnnounce } from "../constant/announce";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  const { onOpen, onClose } = useDisclosure()
  // const [banner, setBanner] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(true)

  useEffect(() => {
    onOpen
  }, [open === true])

  return (
    <Box overflow={"auto"} minW={"100%"}>
      {/* <AnnounceModal image={DummyAnnounce[0].image} alt={DummyAnnounce[0].alt} open={true}/> */}
      <Navbar data={Navigation} />
      <Stack mt={60} gap={"5rem"}>
        {props.children}
      </Stack>
      <Footer />
      <Modal isCentered isOpen={open} onClose={onClose} size={"2xl"} blockScrollOnMount={false}>
        <ModalOverlay/>
        <ModalContent>
          <ModalCloseButton onClick={() => setOpen(false)}/>
            <Image src={DummyAnnounce[0].image} alt={DummyAnnounce[0].alt} borderRadius={15}/>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Layout;
