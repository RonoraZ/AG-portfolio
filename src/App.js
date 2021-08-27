import './App.css';
import Nav from './components/Nav'; 
import Header from './components/Header';
import Work from './components/Work'; 
import Footer from './components/Footer';   
import Line from './components/Line';

function App() {
  return (
    <div className="App">
      <Nav /> 
      <Header/> 
      <Line shape="circle"/>
      <Work/> 
      <Line shape="diamond"/>
      <Footer/>
    </div>
  );
}

export default App;
