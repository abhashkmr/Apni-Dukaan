import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const user = { email, password };
    };

    return (
        <div className="sm:grid grid-cols-2 divide-x divide-black mt-6">

            {/* left part */}
            <div className='flex flex-1 justify-center items-center '>
                <img src="/images/logo.png" alt="" />
            </div>

            {/* right part */}
            <div className='flex justify-center items-center'>

                <form onSubmit="{handleLogin}" className='flex items-center flex-col my-2 p-2 sm:border   rounded-xl '>

                    {/* Email */}
                    <div className=" my-8 text-3xl font-mont ">Log in here</div>


                    <div className='px-2 py-2'>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="text" className='border rounded-full outline-none w-auto pl-2 pr-4  text-black text-opacity-75 bg-gray-100'
                            id="email" onChange={e => setEmail(e.target.value)} />
                    </div>

                    {/* password */}
                    <div className='px-2 py-2'>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password"
                            className='border rounded-full outline-none w-auto pl-2 pr-4  text-black text-opacity-75
                            bg-gray-100 '
                            id='password' 
                            onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <button type='submit' className='bg-blue-500 text-white flex mt-8  border mx-36 px-4 py-1 rounded-full shadow-2xl hover:bg-gray-500'>
                        Login
                    </button>

                    <div className='my-4 mb-40 m-28'>New User? <Link to='/register' className='text-red-500'>Sign up</Link> </div>
                    
                

                </form>
            </div>


        </div>
    )
}

export default Login;