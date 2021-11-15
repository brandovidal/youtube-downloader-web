// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Result from '../../components/Result'
import Search from '../../components/Search'
import Loading from '../../components/Loading'

const NO_OP = () => {}

const Home = ({ link = '', data = '', error = '', loading = false, handleChange = NO_OP, handleSubmit = NO_OP }) => {
  return (
    <>
      <Header />
      {loading === true ? (
        <Loading message="Buscando formatos" />
      ) : data !== '' ? (
        <Result data={data} link={link} />
      ) : (
        <Search link={link} error={error} loading={loading} handleChange={handleChange} handleSubmit={handleSubmit} />
      )}
      <Footer />
    </>
  )
}

export default Home
