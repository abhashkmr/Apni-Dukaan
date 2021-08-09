import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';


function Register(props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();
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
    //setIsPending(true);
    const user = { name, mobile, email, password };
      
    axios
      .post("http://localhost:4000/register", user)
      .then((res) => console.log(res.config.data));
    history.push("/");
  };


  return (
    <div className="md:grid grid-cols-2 divide-x divide-gray-400  mt-6 " >

      {/* left side */}
      <div className="flex flex-1 justify-center items-center">
        <img src="/images/logo.png" alt="" />
      </div>



      {/* right side */}
      <div className="p-20 ">

        <form onSubmit={handleSubmit} className="flex items-center flex-col my-2 p-2 sm:border rounded-xl ">

          <div className="my-8 text-3xl font-mont">
            Registration Form
          </div>


          {/*name  */}
          <div className="px-2 py-2 ">
            <label htmlFor="exampleName">Enter Your Name</label>
            <br />
            <input
              type="text"
              className="  mt-1 w-auto rounded-full pl-2 outline-none border text-black text-opacity-75
              bg-gray-100  "
              id="name"
              placeholder="e.g. Abhilash Tyagi"
              onChange={(e) => {
                setName(e.target.value);
                //console.log(e.target)
;              }}
            />
          </div>

          {/* mobile */}
          <div className="px-2 py-2">
            <label htmlFor="exampleMobile">Enter Your Mobile Number</label>
            <br />
            <input
              type="text"
              className="mt-1 w-auto rounded-full pl-2 border outline-none text-black text-opacity-75
              bg-gray-100 "
              id="name"
              placeholder="e.g.9627244116"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>

          {/* Email */}
          <div className="px-2 py-2">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <br />
            <input
              type="email"
              className="mt-1 w-auto rounded-full pl-2 outline-none border text-black text-opacity-75
              bg-gray-100 "
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(e.target.value);
              }}
            />
            
          </div>

          {/* password */}
          <div className="px-2 py-2">
            <label htmlFor="exampleInputPassword1">Password</label>
            <br />
            <input
              type="password"
              className="mt-1 w-auto rounded-full pl-2 outline-none border text-black text-opacity-75
              bg-gray-100 "
              id="password"
              placeholder="Password"
            />
          </div>

          {/* confirm password */}
          <div className="px-2 py-2">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <br />
            <input
              type="password"
              className="mt-1 w-auto rounded-full pl-2 outline-none border text-black text-opacity-75
              bg-gray-100 "
              id="confirmPassword "
              placeholder="Confirm Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>




          <button type="submit" 
          className="bg-blue-500 text-white flex mt-8  border mx-36 px-4 py-1 rounded-full shadow-2xl hover:bg-gray-500">
            Register
          </button>

          <div className=" flex mt-2 text ">
            <p>Login with < FacebookIcon /></p>
          </div>

        </form>

      </div>
    </div>

  );
}
export default Register;