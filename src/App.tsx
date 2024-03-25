import Layout from './components/Layout'
import Aboutus from './routes/home/Aboutus'
import Banner from './routes/home/Header'
import Mitra from './routes/home/Mitra'
import Product from './routes/home/Product'

function App() {

  return (
    <Layout>
      <Banner/>
      <Mitra/>
      <Product/>
      <Aboutus/>
    </Layout>
  )
}

export default App
