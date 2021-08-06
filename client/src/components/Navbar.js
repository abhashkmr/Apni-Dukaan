import { Link } from "react-router-dom";
const Navbar = () => {
  return (
 

    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand ">
       Apni Dukaan
      </Link>
      <div className="collpase navbar-collapse">
        {/* <ul className="navbar-nav mr-auto"> */}
          {/* <li className="navbar-item">
            <Link to="/" className="nav-link">
              Exercises
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Create Exercise Log
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </li> */}
          {/* <li className ="navbar-item float-right text-right">
              <button className='btn btn-outline-light '>Login</button>
          </li>
        </ul> */}
        {/* <button className='btn btn-outline-light float-right'>Login</button> */}
      </div>
      <div className='float-right'> 
      <Link to ="/login"><button className='btn btn-outline-light m-1'>Login </button></Link>
      <Link to ="/register"><button className='btn btn-outline-light m-1'>Register</button></Link>
      </div>
    </nav>


  );
};

export default Navbar;
