import './App.css';
import Header from './Header'
import Footer from './Footer';
import Menu from './Menu';
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Footer/>
      
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
