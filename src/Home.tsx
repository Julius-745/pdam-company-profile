import Layout from './components/Layout'
import Aboutus from './routes/home/Aboutus'
import Banner from './routes/home/Banner'
import Mitra from './routes/home/Mitra'
import News from './routes/home/News'
import Faq from './routes/home/Faq'
import Review from './routes/home/Review'
import Seo from './components/Seo'

function Home() {

  return (
    <>
      <Seo title={'PDAM Kabupaten Probolinggo'} description={'Menghadirkan Solusi Air Bersih untuk Kesejahteraan Bersama'} type={'webapp'} name={'perumdamtirtaargapura'} />
        <Layout>
          <Banner />
          <Mitra />
          <News />
          <Aboutus />
          <Review />
          <Faq />
      </Layout>
    </>
  )
}

export default Home
