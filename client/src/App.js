import  {BrowserRouter as Router,Route} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from'./components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      <Route path="/"  exact component ={Home}/>
      <Route path="/register"  component ={Register}/>
      <Route path="/login" component = {Login}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
