import NavBar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import Advertasing from './components/Advertasing';
import NossosProdutos from './components/OurProducts';
import Belts from './pages/Belts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero />
      <Advertasing />
      <NossosProdutos />
      <Belts />
      <Footer />
    </div>
  );
}


export default App;
