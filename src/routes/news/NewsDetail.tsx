import { Stack, HStack, Text, Image, Heading } from "@chakra-ui/react"
import { CardNews } from "../../components/CardNews"
import Layout from "../../components/Layout"


const NewsDetail = () => {
    return (
        <Layout>
            <Stack marginX={"9rem"}>
                <Image src="https://ik.imagekit.io/uavheojaq/PDAM/Company%20Profile/dummyBanner.png?updatedAt=1711431058758" alt=""/>
            </Stack>
            <Stack marginX={"8rem"}>
                <Heading>Perumdam Droping Air Bersih Ke Rumah Warga</Heading>
                <Text textAlign={"justify"} lineHeight={"2rem"}><b>WONOMERTO, Radar Bromo -</b> Perumdam Tirta Argapura tidak diam saja menyikapi ribuan pelanggannya yang kesulitan air bersih.
                Petugas Perumdam langsung droping air bersih ke ribuan pelanggan di sejumlah desa yang kesulitan air bersih akibat hancurnya beberapa jaringan pipa air bersih di Sukapura.

                Bahkan, untuk mempermudah droping air bersih, dibangun terminal air di Desa Patalan, Kecamatan Wonomerto.

                Dengan cara ini, truk tangki yang akan dropping air bersih bisa mengambil air lebih dekat. Sehingga, distribusi air bersih pada warga pun bisa lebih cepat.
                Kabag Teknik Perumdam Tirta Argapura Kabupaten Probolinggo, Hari Supriyanto menjelaskan, rusaknya jaringan pipa air bersih di sumber mata air Umbulan membuat sekitar seribu pelanggan Unit Patalan berdampak.
                Pelayanan air mati total ke pelanggan di Unit Patalan. Kemudian, sekitar 300 pelanggan di Unit Bantaran dan 200 pelanggan di Unit Sukapura ikut terdampak.
                Ratusan pelanggan ini juga tidak bisa menikmati aliran air bersih akibat putusnya pipa.
                Karena kondisi itu, sejak Kamis (29/2) pihaknya droping air bersih tiap hari menggunakan truk tangki ke pelanggan yang terdampak.

                Air diambil dari Desa Banjarsawah, Kecamatan Tegalsiwalan. Lokasinya cukup jauh. Karena itu, sehari hanya mampu droping air bersih dua kali saja.
                Untuk mempercepat penyaluran air bersih, Perumdam membuat terminal air di Patalan.

                Dengan begitu, pengambilan air bersih dengan truk tangki bisa lebih dekat dan lebih cepat droping ke warga.
                Paling tidak, sehari bisa empat kali atau lebih droping air bersih ke pelanggan yang membutuhkan. 
                Selain itu, pihaknya juga sudah koordinasi dengan BPBD Kabupaten Probolinggo untuk membantu droping air bersih pada pelanggan PDAM yang terdampak.
                Sehingga, semua pelanggan yang kesulitan air bersih bisa tetap mendapat air bersih.
                ”Selama pelayanan air bersih mati total atau terganggu, kami berupaya terus droping air bersih menggunakan truk tangki. Sehingga masyarakat (pelanggan Perumdam, red), tidak sampai krisis air bersih,” terangnya. (mas/hn)
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