import { Link } from "react-router-dom";
const Navbar = () => {
  return (
 

    <nav className=" bg-gray-700 w-full sticky top-0">
      <div className='  flex justify-between p-2 '>

        <div className=" border-yellow-500 ">
          <Link to="/" className="">
          <img src="images/logo.png" className="h-10  rounded-full" />
          </Link>
        </div>
        
        {/* <div>search bar</div> */}
        
        <div className=' flex items-center  '> 
          <Link to ="/login"><button 
          className='px-2  h-8 rounded-xl mx-1 text-black bg-gray-50 hover:bg-gray-200 '
          >Login </button></Link>

          <Link to ="/register"><button 
          className='px-2  h-8 text-black rounded-xl mx-1 bg-gray-50 hover:bg-gray-200'
          >Register</button></Link>
        </div>
      </div>
      

    </nav>


  );
};

export default Navbar;
