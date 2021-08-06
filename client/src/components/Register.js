import React, { useState } from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
function Register(props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history =useHistory();
    // const handleChange = (e) => {
    //     const {id , value} = e.target   
    //     setState(prevState => ({
    //         ...prevState,
    //         [id] : value
    //     }))
    // }


  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const result = await axios("http://localhost:5000/users/");
  
    //     setUsers(result.data);
    //     console.log(result.data);
    //   };
  
    //   fetchData();
    // }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsPending(true);
      const user = { name, mobile, email, password };
  
      axios
        .post("http://localhost:5000/register", user)
        .then((res) => console.log(res.data));
      history.push("/");
    };


  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={handleSubmit}>
      <div className="form-group text-left">
          <label htmlFor="exampleName">Enter Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="e.g. Abhash Kumar"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleMobile">Enter Your Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="e.g.9898998231"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
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
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;