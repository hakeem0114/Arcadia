import '../App.css'

//Icon Imports 
import { googleLogo, git } from '../assets/iconAssets/assets'

//React Icon Imports
import { HiOutlineArrowLeft} from 'react-icons/hi';

//React router Imports
import { Link, useNavigate} from "react-router-dom";

//Redux Imports
import { useDispatch, useSelector } from 'react-redux';


//React Imports
import { useState } from 'react';

//Firebase Imports
import { getAuth, 
        signInWithPopup, 
        GoogleAuthProvider, 
        signOut,  
        GithubAuthProvider, 
} from "firebase/auth";

import {
    addUser,
    removeUser
  } from '../states/arcadiaSlice'

function User() {

    //Sign in with email& password
    //https://blog.logrocket.com/user-authentication-firebase-react-apps/

    const userPostSave = useSelector((state) => state.arcadia.userInfo)
  //  console.log(userPostSave)
   // setCurrentUser(userPostSave)
    
    //Store firebase info to redux before refresh
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //Firebase Google Setup
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();
    const auth = getAuth();

    const [currUser, setCurrentUser]=useState()
    
    //console.log(currUser)
    
    const handleGoogleLogin=(e)=>{
        e.preventDefault()

        //signInWithRedirect(auth, provider);
       signInWithPopup(auth, provider)
       //getRedirectResult(auth)
        .then((result) => {
            //console.log('googleSignIn')
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
           const user = result.user; //Use global var to conditionally render page upon auth
            // IdP data available using getAdditionalUserInfo(result)
            // ...
           // console.log(user)

           // setCurrentUser(user)

            //Store user in redux
            dispatch(
                (addUser({
                    _id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image:user.photoURL,
                    usedDiscount: false
                }))
            )
            setTimeout(()=>{
                navigate('/')
            },3000)
            
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(error)
        });
        
    }
    

    const handleGithubLogin=(e)=>{
        e.preventDefault()
        
        signInWithPopup(auth, provider2)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...\
             //   setCurrentUser(user)


                //Store user in redux
                dispatch(
                    (addUser({
                        _id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        image:user.photoURL,
                        usedDiscount: false
                    }))
                )
                setTimeout(()=>{
                    navigate('/')
                },3000)


            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                // ...
                console.log(error)
            });
            
    }


    //Signout
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            //Hide Signout when signed in & vice versa
            console.log('Firebase SignOut')

            //Store user in redux
            dispatch(
                  (removeUser({

                  }))
            )
            
          }).catch((error) => {
            console.log(error)
          });

          window.location.reload();
    }

  return (
      <div className='w-full flex flex-col items-center justify-center  py-20'>
            {/***LOGIN FORM / REGISTER**/}
            {!userPostSave  &&
                (
                    <div className='flex flex-col gap-10'>
                                    <div className='w-full flex items-center justify-center'>
                                        <div 
                                            onClick={handleGithubLogin}
                                            className='text-base w-60 h-12 tracking-wider border-[2px] border-gray-400 
                                                        rounded-md flex items-center justify-center gap-2 hover:border-yellow-600
                                                        cursor-pointer duration-300
                                        '>
                                            <img className='w-8' src={git} alt="google" />
                                            <span className='text-sm text-gray-900'>Sign in with Git</span>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center justify-center'>
                                        <div 
                                            onClick={handleGoogleLogin}
                                            className='text-base w-60 h-12 tracking-wider border-[2px] border-gray-400 
                                                        rounded-md flex items-center justify-center gap-2 hover:border-yellow-600
                                                        cursor-pointer duration-300
                                        '>
                                            <img className='w-8' src={googleLogo} alt="google" />
                                            <span className='text-sm text-gray-900'>Sign in with Google</span>
                                        </div>
                                    </div>
                    </div>
                )
                
            }


            {/**EXISTS/SIGN OUT**/}
            {userPostSave &&
                (
                    <div className='flex flex-col gap-5'>
                        <div>
                                <div className='max-h-screen m-10 flex flex-col justify-center items-center gap-5'>
                                        <p  className='text-lg md:text-xl lg:text-2xl mt-10 uppercase font-bold text-orange-600 text-center'>Checkout our newsletter for a 10% discount code. <br/>Or view our catalogue BELOW!</p>
                                        <Link to='/'>
                                            <button className='text-lg mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                                                <span> < HiOutlineArrowLeft  size={30}/> </span>

                                                Go Back To Shopping
                                            </button>
                                        </Link>           
                                </div>

                                <div className='w-full flex items-center justify-center'>
                                    <button 
                                        onClick={handleSignOut}
                                        className='bg-black text-white text-base py-3 px-8 tracking wide rounded-md
                                            hover:bg-gray-800 duration-300'
                                    >Sign Out</button>
                                </div>
                        </div>

                    </div>
                )

            }
       </div>

  )
}

export default User
