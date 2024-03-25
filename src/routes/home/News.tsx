import { HStack, Text, Stack } from "@chakra-ui/react";
import {CardNews} from "../../components/CardNews";
const News = () => {
    return (
        <Stack>
        <Text marginX={{base: "2rem", lg: "10rem"}} fontSize={{base:"lg", lg: "4xl"}} fontWeight={"bold"}>Informasi Terkini Terkait Perumdam Tirta Argapura</Text>
        <HStack flexWrap={"wrap"} marginBottom={"5rem"} justifyContent={"center"}>
            <CardNews 
                title={"Perumdam Droping Air Bersih Ke Rumah Warga"} 
                description={"Petugas Perumdam langsung droping air bersih ke ribuan pelanggan di sejumlah desa yang kesulitan air bersih akibat hancurnya beberapa jaringan pipa air bersih di Sukapura. Bahkan, untuk mempermudah droping air bersih, dibangun terminal air di Desa Patalan, Kecamatan Wonomerto"} 
                image={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                looked={10}
                date="4 Maret 2020"
                />
            <CardNews 
                title={"Perumdam Droping Air Bersih Ke Rumah Warga"} 
                description={"Petugas Perumdam langsung droping air bersih ke ribuan pelanggan di sejumlah desa yang kesulitan air bersih akibat hancurnya beberapa jaringan pipa air bersih di Sukapura. Bahkan, untuk mempermudah droping air bersih, dibangun terminal air di Desa Patalan, Kecamatan Wonomerto"} 
                image={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                looked={10}
                date="4 Maret 2020"
                />
            <CardNews 
                title={"Perumdam Droping Air Bersih Ke Rumah Warga"} 
                description={"Petugas Perumdam langsung droping air bersih ke ribuan pelanggan di sejumlah desa yang kesulitan air bersih akibat hancurnya beberapa jaringan pipa air bersih di Sukapura. Bahkan, untuk mempermudah droping air bersih, dibangun terminal air di Desa Patalan, Kecamatan Wonomerto"} 
                image={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                looked={10}
                date="4 Maret 2020"
                />
            <CardNews 
                title={"Perumdam Droping Air Bersih Ke Rumah Warga"} 
                description={"Petugas Perumdam langsung droping air bersih ke ribuan pelanggan di sejumlah desa yang kesulitan air bersih akibat hancurnya beberapa jaringan pipa air bersih di Sukapura. Bahkan, untuk mempermudah droping air bersih, dibangun terminal air di Desa Patalan, Kecamatan Wonomerto"} 
                image={"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                looked={10}
                date="4 Maret 2020"
                />
        </HStack>
        </Stack>
    )
}

export default News;