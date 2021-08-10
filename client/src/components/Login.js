import axios from 'axios';
import React,{useState} from 'react';
import { setUserSession } from '../Utils/common'
function Login(props){
  const [username, setEmail] = useState("");
  const [error,setError]=useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    const user = { username, password };
    axios.post('http://localhost:5000/users/signin', user).then(response => {
       setLoading(false);
    console.log(response);
    console.log("hello");
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
       setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
       else setError("Something went wrong. Please try again later.");
    });
  }


    return(
        <center><div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={handleLogin}>
             
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e) => {
                setPassword(e.target.value);
              }}
          />
        </div>

        <button type="submit"  className="btn btn-primary">
          Login
        </button>
        
      </form>
     
    </div> </center>
    )
}
export default Login;