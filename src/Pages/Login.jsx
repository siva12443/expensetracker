import React, { useState } from "react"; 
import TextField from '@mui/material/TextField';
import logo from '../images/finance_transaction.svg'

// import '../index.css'

export default function Login() {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 font-nunito">
                <div className="flex w-full max-w-4xl p-6 space-x-6">
                    <form className="bg-white p-6 rounded shadow-md size-3/4">
                        <label className="font-bold text-green-500 text-xl">Glad to see you again, Login!</label>
                        <div className="mt-4">
                            <label 
                                className='sticky left-3 top-3 text-gray-700 transition-all duration-200 transform text-md'
                            >
                                User Name or Email
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
                                Password
                            </label>
                            <input 
                                id="password" 
                                name="password" 
                                required
                                type="password"
                                className="block w-full px-3 py-2 border border-gray-300 rounded shadow-md h-10 focus:outline-none focus:ring focus:border-blue-300"
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                            />
                        </div>
                        <button type="submit" className="rounded-xl bg-green-500 text-gray-100 p-2 mt-4">Sign In</button>
                        <span className="flex flex-row">
                        <p className="mt-4">New to the app?</p>
                        <p className="text-green-500 cursor-pointer mt-4 ml-2 underline">Sign Up</p>
                        </span>
                        <button className="bg-white text-black flex flex-row m-2 p-4 h-fit hover:bg-slate-300 shadow-xl ring-black border border-gray-400">
                            <svg
                                version="1.1"
                                width="20"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512", marginRight: 10 }}
                            >
                                <path
                                style={{ fill: "#FBBB00" }}
                                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                                c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644
                                c-5.317,15.501-8.215,32.141-8.215,49.456
                                C103.821,274.792,107.225,292.797,113.47,309.408z"
                                ></path>
                                <path
                                style={{ fill: "#518EF8" }}
                                d="M507.527,208.176C510.467,223.662,512,239.655,512,256
                                c0,18.328-1.927,36.206-5.598,53.451
                                c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                                c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                                ></path>
                                <path
                                style={{ fill: "#28B446" }}
                                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                                c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                                c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                                ></path>
                                <path
                                style={{ fill: "#F14336" }}
                                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                                c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014
                                C71.23,56.123,157.06,0,256,0
                                C318.115,0,375.068,22.126,419.404,58.936z"
                                ></path>
                            </svg>
                            Google
                            </button>
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