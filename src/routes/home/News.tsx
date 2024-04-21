import { HStack, Text, Stack } from "@chakra-ui/react";
import {CardNews} from "../../components/CardNews";
import useFetchData from '../../hook/fetchdata';
import axiosMedia from '../../hook/AxiosMedia';

const News = () => {
    const {
        data,
        loading,
      } = useFetchData("/api/beritas?sort[0]=id:desc&pagination[page]=1&pagination[pageSize]=2&populate=*");

      return (
        <Stack>
        <Text marginX={{base: "2rem", lg: "10rem"}} fontSize={{base:"lg", lg: "4xl"}} fontWeight={"bold"}>Informasi Terkini Terkait Perumdam Tirta Argapura</Text>
        <HStack flexWrap={"wrap"} marginBottom={"5rem"} justifyContent={"center"}>
            {!loading && data.map((item, idx) => (
            <CardNews 
                key={idx}
                id={idx}
                title={item.attributes?.title_data} 
                description={item.attributes?.content_data} 
                image={axiosMedia+item.attributes.media_data.data?.attributes.url }
                looked={10}
                date={item.attributes.createdAt}
                />
            ))}
        </HStack>
        </Stack>
    )
}

export default News;