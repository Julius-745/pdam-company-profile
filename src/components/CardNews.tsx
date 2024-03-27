import { Card, CardBody, Stack, Heading, CardFooter, Image, Text, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export interface INEWS {
    id: number;
    image: any;
    title: string;
    description: string;
    looked: number;
    date: string;
    recomendation?: boolean;
    attributes?: any;
}

export const CardNews: React.FC<INEWS> = ({id, image, title, description, looked, date, recomendation}) => {
    return (
      <Link to={`news/${id}`}>
        <Card w={recomendation ? 'sm' : '2xl'} backgroundColor={"white"} borderRadius={"lg"} boxShadow={"-8px 5px 12px 0px rgba(0,0,0,0.39)"} margin={"2rem"}>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color={"black"}>{title}</Heading>
      <Text color={"black"} textOverflow={"ellipsis"} wordBreak={"break-word"} overflow={"hidden"} maxHeight="10.6em" lineHeight="1.8em">
      {description}
      </Text>
    </Stack>
  </CardBody>
  <CardFooter justifyContent={"flex-end"}>
    <HStack spacing='2'>
      <Text color={"black"}>
        {looked} {" Dilihat"}
      </Text>
      <Text color={"black"}>
        {date}
      </Text>
    </HStack>
  </CardFooter>
</Card>
</Link>
    )
}