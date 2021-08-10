import  {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicRoute  from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRoute';
import Navbar from'./components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {useEffect,useState} from 'react';
import axios from 'axios'
import { getToken, removeUserSession, setUserSession } from './Utils/common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:5000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, [authLoading]);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
      <Route path="/"  exact component ={Home}/>
      <Route path="/register"  component ={Register}/>
      <PublicRoute path="/login" component={Login}/>
      <PrivateRoute path ="/dashboard" component={Dashboard}/>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
