import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, useDisclosure, Image } from "@chakra-ui/react"
import { IDummyAnnounce } from "../constant/announce"
import { useEffect } from "react"


export const AnnounceModal: React.FC<IDummyAnnounce> = ({image, alt, open}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    useEffect(() => {
        onOpen
    }, [open === true])
    

    return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt={alt}/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}