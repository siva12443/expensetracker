import React, { useState } from "react"; 
import TextField from '@mui/material/TextField';
import logo from '../images/finance_transaction.svg'

// import '../index.css'

export default function SignUp() {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 font-nunito">
                <div className="flex w-full max-w-4xl p-6 space-x-6">
                    <form className="bg-white p-6 rounded shadow-md size-3/4">
                        <label className="font-bold text-green-500 text-xl">Welcome, SignUp!</label>
                        <div className="mt-4">
                            <label 
                                className='sticky left-3 top-3 text-gray-700 transition-all duration-200 transform text-md'
                            >
                                Full Name
                            </label>
                            <input 
                                id="fullname" 
                                name="fullname" 
                                className="block w-full px-3 py-2 border border-gray-300 rounded shadow-md h-10 focus:outline-none focus:ring focus:border-blue-300"
                                type="text"
                                required
                                maxLength={64}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                            />
                        </div>
                        <div className="mt-4">
                            <label 
                                className='sticky left-3 top-3 text-gray-700 transition-all duration-200 transform text-md'
                            >
                                User Name
                            </label>
                            <input 
                                id="username" 
                                name="username" 
                                className="block w-full px-3 py-2 border border-gray-300 rounded shadow-md h-10 focus:outline-none focus:ring focus:border-blue-300"
                                type="text"
                                required
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                            />
                        </div>
                        <div className="mt-4">
                            <label 
                                className='sticky left-3 top-3 text-gray-700 transition-all duration-200 transform text-md'
                            >
                                Contact Email
                            </label>
                            <input 
                                id="email" 
                                name="email" 
                                className="block w-full px-3 py-2 border border-gray-300 rounded shadow-md h-10 focus:outline-none focus:ring focus:border-blue-300"
                                type="email"
                                required
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                            />
                        </div>
                        <div className="mt-4">
                            <label 
                                className='sticky left-3 top-3 text-gray-700 transition-all duration-200 transform text-md'
                            >
                                New Password
                            </label>
                            <input 
                                id="newpassword" 
                                name="newpassword" 
                                type="password"
                                required
                                className="block w-full px-3 py-2 border border-gray-300 rounded shadow-md h-10 focus:outline-none focus:ring focus:border-blue-300"
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                            />
                        </div>
                        <div className="mt-4">
                            <label 
                                className='sticky left-3 top-3 text-gray-700 transition-all duration-200 transform text-md'
                            >
                                Confirm Password
                            </label>
                            <input 
                                id="confirmpassword" 
                                name="confirmpassword" 
                                type="password"
                                required
                                className="block w-full px-3 py-2 border border-gray-300 rounded shadow-md h-10 focus:outline-none focus:ring focus:border-blue-300"
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                            />
                        </div>
                        <button type="submit" className="rounded-xl bg-green-500 text-gray-100 p-2 mt-4">Sign Up</button>
                        
                        
                    </form>
                    {/* <img src={logo} alt="Login illustration" className="rounded shadow-md w-1/2 " /> */}
                </div>
                
            </div>
                        
            <footer>
                <a className = "text-sm font-nunito" href="https://www.freepik.com/free-vector/business-people-working-plan-with-magnifier-laptop-business-plan-market-analysis-business-goals-concept-white-background_11667122.htm#fromView=search&page=1&position=16&uuid=d08c3e4d-e843-4cd2-be61-9871f2fe3653">Image by vectorjuice on Freepik</a>
            </footer>
        </div>
  );  
}