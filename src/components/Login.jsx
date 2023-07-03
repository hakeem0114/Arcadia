/* eslint-disable react/no-unescaped-entities */

import '../App.css'

//React router Imports
import { Link, useNavigate} from "react-router-dom";

//React Imports
import { useState } from 'react';

//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import {
    addUser,
  } from '../states/arcadiaSlice'

//Firebase Imports
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";


const Login  = () => {

    //Forms
        const [formData, setFormData] = useState(
            {
                name:"",
                email: "", 
                password:"",
            }
        )
        function handleChange(e) {
                //destructure properties from e.target object from DOM
                const {name, value} = e.target
                setFormData(prevFormData => {
                    return {
                        ...prevFormData,
                        [name]:value
                    }
                })
            }
        //console.log(formData.name, formData.email, formData.password)
        

    //Form switching
        const[handleLogin, setHandleLogin] = useState(true)
        const handleSignUp = ()=>{
            setHandleLogin(!handleLogin)
          //  console.log(handleLogin)
        }

    //Firebase & redux setup
        //User Info from Firebase to redux after login
      //  const userPostSave = useSelector((state) => state.arcadia.userInfo)
        
        //Store firebase info to redux before refresh
        const dispatch = useDispatch()
        const navigate = useNavigate()

        //Firebase Provider Setup
        const auth = getAuth();

        //Signup User
        const signup = (e)=>{
            e.preventDefault()

            createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
             })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(error)
            });
        }

        //Login User
        const login = (e)=>{
            e.preventDefault()

            signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;

             //Store user in redux
                dispatch(
                        (addUser({
                            _id: user.uid,
                            name: formData.name,
                            email: user.email,
                            usedDiscount: false
                        }))
                    )
                    setTimeout(()=>{
                        navigate('/Arcadia')
                    },1500)
                })

            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(error)
            });
        }

    return (
        <div className="relative flex flex-col justify-center overflow-hidden w-full  m-4">
            {handleLogin &&
                (
                   <div className="w-3/5 p-6 m-auto bg-white border-2 shadow-lg shadow-amber-500">
                        <form className="mt-6">
                            <div className="mb-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Email
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name='email'
                                        type="email"
                                        value={formData.email}
                                        className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Password
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        value={formData.password}
                                        name='password'
                                        type="password"
                                        className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mt-6">
                                    <button onClick={login} className="w-full px-4 py-2 tracking-wid rounded-br-3xl bg-orange-500 text-white hover:bg-yellow-400 duration-300">
                                        Login
                                    </button>
                                </div>
                            </form>

                            <p className="mt-8 text-xs font-light text-center text-gray-700">
                                {" "}
                                Don't have an account?{" "}
                                <a
                                    onClick={handleSignUp}
                                    className="font-medium text-orange-600 hover:underline cursor-pointer"
                                >
                                    Sign up
                                </a>
                            </p>
                        </div>
                    )
                }
                {/***SIGN UP PAGE**/}
                {!handleLogin &&
                    (
                        <div className="w-3/5 p-6 m-auto bg-white border-2 shadow-xl shadow-red-500">
                            <form className="mt-6">
                            <div className="mb-2">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Name
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name='name'
                                        type="name"
                                        value={formData.name}

                                        className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Email
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name='email'
                                        type="email"
                                        value={formData.email}

                                        className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Password
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name='password'
                                        type="password"
                                        value={formData.password}

                                        className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mt-6">
                                    <button onClick={signup} className="w-full px-4 py-2 tracking-wid rounded-br-3xl bg-orange-500 text-white hover:bg-yellow-400 duration-300">
                                        Signup
                                    </button>
                                </div>
                        </form>

                        <p className="mt-8 text-xs font-light text-center text-gray-700">
                            {" "}
                            Already have an account?{" "}
                            <a
                                onClick={handleSignUp}
                                className="font-medium text-orange-600 hover:underline  cursor-pointer"
                            >
                                Login
                            </a>
                        </p>
                    </div> 
                )

            }

        </div>
    );
}

export default Login 
