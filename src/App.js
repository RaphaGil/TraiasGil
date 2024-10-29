import NavBar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import Advertasing from './components/Advertasing';
import NossosProdutos from './components/OurProducts';
import Belts from './components/Belts';
import Acessories from './components/Acessories'
import Footer from './components/Footer';
import Buy from './components/Buy';
// import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero />
      <Advertasing />
      <NossosProdutos />
      <Belts />
      <Acessories />
      <Buy />
      {/* <AboutMe /> */}
      <Footer />
    </div>
  );
}


export default App;
