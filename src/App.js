
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Why from './components/Why/Why';
import Services from './components/services/Services';
import Team from './components/team/Team';
import Clients from './components/clients/Clients';
import News from './components/news/News';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <Why />
      <Services/>
      <Team/>
      <Clients/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
