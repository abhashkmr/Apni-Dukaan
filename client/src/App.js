import  {BrowserRouter as Router,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from'./components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Route path="/"  exact component ={Home}/>
      <Route path="/register"  component ={Register}/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
