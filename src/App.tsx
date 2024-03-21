import Layout from './components/Layout'
import { Box, Text } from '@chakra-ui/react'
import Banner from './routes/home/Header'
import Product from './routes/home/Product'

function App() {

  return (
    <Layout>
      <Banner/>
      <Product/>
    </Layout>
  )
}

export default App
