import NavBar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import Advertasing from './components/Advertasing';
import Belts from './components/Belts';
import NossosProdutos from './components/OurProducts';
import Acessories from './components/Acessories';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero />
      <Advertasing />
      <NossosProdutos />
      <Belts />
      <Acessories />
    </div>
  );
}


export default App;
