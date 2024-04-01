import Layout from './components/Layout'
import Aboutus from './routes/home/Aboutus'
import Banner from './routes/home/Banner'
import Mitra from './routes/home/Mitra'
import News from './routes/home/News'
import Faq from './routes/home/Faq'
import Review from './routes/home/Review'

function Home() {

  return (
    <Layout>
      <Banner/>
      <Mitra/>
      <News/>
      <Aboutus/>
      <Review/>
      <Faq/>
    </Layout>
  )
}

export default Home
