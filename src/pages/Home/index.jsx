// Components
import Header from '../../components/Header'
import Search from '../../components/Search'
import Footer from '../../components/Footer'

const Home = ({ link, handleChange }) => {
  return (
    <>
      <Header />
      <Search link={link} handleChange={handleChange} />
      <Footer />
    </>
  )
}

export default Home
