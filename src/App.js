import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Advertasing from './components/Advertasing';
import NossosProdutos from './components/OurProducts';
import Belts from './components/Belts';
import Acessories from './components/Acessories';
import Footer from './components/Footer';
import Buy from './components/Buy';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="hero"><Hero /></div>
      <div id="produtos"><NossosProdutos /></div>
      <div id="belts"><Belts /></div>
      <div id="accessories"><Acessories /></div>
      <div id="buy"><Buy /></div>
      <Footer />
    </div>
  );
}

export default App;
