import { Stack, HStack, Text, Image, Heading } from "@chakra-ui/react"
import { CardNews } from "../../components/CardNews"
import Layout from "../../components/Layout"
import useFetchData from "../../hook/fetchdata";


const NewsDetail = () => {
    const id = Number(window.location.href.split("/").pop());
    const {data, loading} = useFetchData(`/api/beritas/${id+1}?populate=*`)

    const imageURL = import.meta.env.VITE_IMAGE_URL

    return (
        <Layout>
            <Stack marginX={{base: "1rem",lg: "9rem"}}>
                {/* @ts-ignore */}
                <Image fallbackSrc="https://picsum.photos/800/280" src={!loading && imageURL+data.attributes.media?.data?.attributes?.url} alt=""/> 
            </Stack>
            <Stack marginX={{base: "2rem", lg: "8rem"}}>
                {/* @ts-ignore */}
                <Heading>{!loading && data.attributes.title_berita}</Heading>
                <Text textAlign={"justify"} lineHeight={"2rem"}>
                    {/* @ts-ignore */}
                    {!loading && data.attributes.content_berita}
                </Text>
            </Stack>
        <Stack>
        <Text marginX={{base: "2rem", lg: "10rem"}} fontSize={{base:"lg", lg: "4xl"}} fontWeight={"bold"} textAlign={"center"}>Informasi Lainnya</Text>
        <HStack flexWrap={"wrap"} marginBottom={"5rem"} justifyContent={"center"}>
            <CardNews 
                id={0}
                title={"Perumdam Droping Air Bersih Ke Rumah Warga"} 
                description={"Petugas Perumdam langsung droping air bersih ke ribuan pelanggan di sejumlah desa yang kesulitan air bersih akibat hancurnya beberapa jaringan pipa air bersih di Sukapura. Bahkan, untuk mempermudah droping air bersih, dibangun terminal air di Desa Patalan, Kecamatan Wonomerto"} 
                image={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                looked={10}
                date="4 Maret 2020"
                recomendation={true}
                />
                <CardNews
                id={0} 
                title={"Perumdam Droping Air Bersih Ke Rumah Warga"} 
                description={"Petugas Perumdam langsung droping air bersih ke ribuan pelanggan di sejumlah desa yang kesulitan air bersih akibat hancurnya beberapa jaringan pipa air bersih di Sukapura. Bahkan, untuk mempermudah droping air bersih, dibangun terminal air di Desa Patalan, Kecamatan Wonomerto"} 
                image={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                looked={10}
                date="4 Maret 2020"
                recomendation={true}
                />
            <CardNews
                id={0} 
                title={"Perumdam Droping Air Bersih Ke Rumah Warga"} 
                description={"Petugas Perumdam langsung droping air bersih ke ribuan pelanggan di sejumlah desa yang kesulitan air bersih akibat hancurnya beberapa jaringan pipa air bersih di Sukapura. Bahkan, untuk mempermudah droping air bersih, dibangun terminal air di Desa Patalan, Kecamatan Wonomerto"} 
                image={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                looked={10}
                date="4 Maret 2020"
                recomendation={true}
                />
        </HStack>
        </Stack>
        </Layout>
    )
}


export default NewsDetail;