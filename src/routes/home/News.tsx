import { HStack, Text, Stack } from "@chakra-ui/react";
import {CardNews} from "../../components/CardNews";
import axios from "axios";
import { useEffect, useState } from "react";
import { INEWS } from "../../components/CardNews";

const News = () => {
    const[berita, setBerita] = useState<[INEWS]>();

    const baseURL = import.meta.env.VITE_API_URL
    const imageURL = import.meta.env.VITE_IMAGE_URL
    
    const getDatas = () => {
        try {
            axios.get(baseURL+"/beritas?pagination[page]=1&pagination[pageSize]=2&populate=*")
            .then((response) => setBerita(response.data.data))
        } catch (error) {
            console.log("error log", error)
        }
    }

    useEffect(() => {
        getDatas()
    }, [])

    return (
        <Stack>
        <Text marginX={{base: "2rem", lg: "10rem"}} fontSize={{base:"lg", lg: "4xl"}} fontWeight={"bold"}>Informasi Terkini Perumdam Tirta Argapura</Text>
        <HStack flexWrap={"wrap"} marginBottom={"5rem"} justifyContent={"center"}>
            {berita?.map((item, idx) => (
            <CardNews 
                key={idx}
                id={idx}
                title={item.attributes.title_berita} 
                description={item.attributes.content_berita} 
                image={imageURL+item.attributes.media_berita.data.attributes.url}
                looked={10}
                date={item.attributes.createdAt}
                />
            ))}
        </HStack>
        </Stack>
    )
}

export default News;