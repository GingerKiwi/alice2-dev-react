import { Container, Box } from '@chakra-ui/react'
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
// import ContactForm from './components/ContactForm.jsx'

const App = () => {
  return (
    <Box bg='blackAlpha.900' color='white' height='100vh' paddingTop={100}>
      <Container centerContent>
      <Header />
      <About />
      {/* <ContactForm /> */}
      <Footer />
      </Container>
      
    </Box>
    
  )
}

export default App