import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import PLANS from './Components/PLANS';
import VIRTURE from './Components/VIRTURE';
import CUSTOMIZED from './Components/CUSTOMIZED';
import SERVICED from './Components/SERVICED';
import MEETING from './Components/MEETING';
import Footer from './Components/Footer';


function App() {
  return (
    <>
     <Navbar />
     <Carousel />
     <PLANS /> 
     <VIRTURE />    
     <CUSTOMIZED />
     <SERVICED />
     <MEETING />
     <Footer /> 
    </>
  );
}

export default App;
