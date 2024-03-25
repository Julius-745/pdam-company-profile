import Layout from './components/Layout'
import Aboutus from './routes/home/Aboutus'
import Banner from './routes/home/Header'
import Mitra from './routes/home/Mitra'
import News from './routes/home/News'
import Product from './routes/home/Product'

function App() {

  return (
    <Layout>
      <Banner/>
      <Mitra/>
      <Product/>
      <News/>
      <Aboutus/>
    </Layout>
  )
}

export default App
