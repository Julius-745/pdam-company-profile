import { Card, CardHeader, Flex, Avatar, Heading, IconButton, CardBody, CardFooter, Text, Box, Image } from "@chakra-ui/react";


export interface IReview {
    image: any;
    nama: string;
    job: string;
    review: string;
}

export const CardReview: React.FC<IReview> = ({image, nama, job, review}) => {
    return (
    <Card maxW='md' margin={5} bgColor={"white"} boxShadow={"0px 1px 14px 0px rgba(0,0,0,0.35)"} flexShrink={0}>
  <CardHeader>
  </CardHeader>
  <CardBody borderRadius={"lg"}>
    <Text color={"black"} fontSize={{base: "10px", lg: "15px"}}>
        {review}
    </Text>
  </CardBody>

  <CardFooter>
  <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src={image || 'https://bit.ly/sage-adebayo'} />

        <Box>
          <Heading size='sm' color={"black"} fontSize={{base: "10px", lg: "15px"}}>{nama}</Heading>
          <Text color={"black"} fontSize={{base: "10px", lg: "15px"}}>{job}</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
      />
    </Flex>
  </CardFooter>
</Card>
    )
}