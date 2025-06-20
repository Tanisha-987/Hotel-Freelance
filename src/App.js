import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Rooms from './components/Rooms.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

const App = ()=>{
  return(
    <>
      <Header/>
      <Hero />
      <Rooms />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;