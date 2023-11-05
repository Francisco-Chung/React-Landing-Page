import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"


function App() {


  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Products />
      </Layout>
      <Footer/>
    </>
  )
}

export default App
