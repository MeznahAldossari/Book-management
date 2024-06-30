import React, {useEffect, useState} from 'react'
import Nav from './Nav'
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginLogo from '../assets/loginLogo.png'
import Login2 from '../assets/login2.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Login() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const [err, setErr]= useState('')


  // useEffect(()=>{

  // }, [])
  const changeName= (e)=>{

    setUser({...user, "name": e.target.value})
    setErr('')

  }

  const changePassword =(e)=>{
    setUser({...user, "password": e.target.value})
    setErr('')
  }

  useEffect(()=>{
    loginData()
    setErr('')
  },[])
  const loginData = ()=>{
    setErr('')
    if(user.name.trim() !=='' && user.password.trim() !==''){
        axios.get('https://665736969f970b3b36c8658a.mockapi.io/form')
      .then(function (response) {
        // handle success
        const getUser = response.data.find((userData)=>userData.name === user.name && userData.password === user.password )
        if(getUser){
          let obj= {
            "id": getUser.id,
            "name":getUser.name,
            "password": getUser.password,
            "favorite":getUser.favorite,
            "read_books":getUser.read_books
          }
          localStorage.setItem("loggedIn", JSON.stringify(obj))
          navigate('/')
        }else{
          setErr('Please, Make Sure to Enter Correct Data')
        }
        
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
      }else{
        setErr('Please, Fill All Field')
      }
}
  return (
    <div className='h-full '>
      <Nav/>
      <div className='flex justify-center max-sm:w-full'>
      <div class="h-screen w-[90%] flex justify-center items-center max-sm:flex-col  max-sm:w-[100%] ">
        <div className=' w-[60%]  flex flex-col justify-center items-center max-sm:hidden '>
        <img src={Login2} className='w-[40vw] mt-[10%]'></img>
        </div>
        <div className="flex flex-col mt-16 max-sm:mt-24 justify-center items-center  w-[50%] max-sm:w-[100%] max-sm:justify-center ">

    <div>
      <FaUserCircle  size={80} />
    </div>
    <div className="relative w-96 mt-6 max-sm:w-[90%] max-sm:flex max-sm:justify-center">
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 max-sm:left-3 max-sm:inset-y-3">
    <FaUserAlt className="text-gray-400" />
  </span>
  <input
    type="text"
    className="w-full pl-10 px-4 py-2 max-sm:w-[90%] rounded-lg border border-gray-300 "
    placeholder="Username"
    onChange={changeName}
  />
</div>   
      
<div className="relative w-96 mt-2 max-sm:w-[90%] max-sm:flex max-sm:justify-center">
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 max-sm:left-3 max-sm:inset-y-3">
    <FaLock className="text-gray-400" />
  </span>
  <input
        type="password"
    className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 max-sm:w-[90%]"
    placeholder="Password"
    onChange={changePassword}
  />
</div> 
      <div className='min-w-96 max-sm:w-full'>
      <p className='mt-2 max-sm:ml-10 text-start px-2 max-sm:w-[90%]'>Already have account?  <Link to="/signup">Sign Up</Link></p>

        </div>  
        <span className='text-[#db4531]'>{err}</span>

      <button className='viewBook max-sm:w-[80%]  w-96 mt-6 py-[1.2vh] rounded-xl text-[1.rem] font-medium text-white' onClick={loginData}>Login</button>
    

    
     
     
     
      </div>
     
</div>
   

</div>
<div className='mt-12'>
   <Footer/></div> 
    </div>
  )
}

export default Login
