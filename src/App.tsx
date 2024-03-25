import Layout from './components/Layout'
import Aboutus from './routes/home/Aboutus'
import Banner from './routes/home/Banner'
import Mitra from './routes/home/Mitra'
import News from './routes/home/News'
import Product from './routes/home/Product'
import Faq from './routes/home/Faq'

function App() {

  return (
    <Layout>
      <Banner/>
      <Mitra/>
      <Product/>
      <News/>
      <Aboutus/>
      <Faq/>
    </Layout>
  )
}

export default App
