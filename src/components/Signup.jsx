import React, { useState } from 'react'
import Nav from './Nav'
import { HiOutlineMail } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Login2 from '../assets/login2.png'
import Footer from './Footer';

function Signup() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [checkEmails, setCheckEmail] = useState('')
  const [checkPasswords, setCheckPassword] = useState('')
  const [checkNames, setCheckName] = useState('')
  const [checkEmpty, setCheckEmpty] = useState('')
  

  const navigate = useNavigate()

  const changenames= (e)=>{

    setUser({...user, "name": e.target.value})
    setCheckEmpty('')

  }

  const changepasswords =(e)=>{
    setUser({...user, "password": e.target.value})
    setCheckEmpty('')
  }
  const changeemails =(e)=>{
    setUser({...user, "email": e.target.value})
    setCheckEmpty('')
  }

  const PostUsers = ()=>{

  
   
    setCheckEmail('')
    setCheckPassword('')
    setCheckName('')
    setCheckEmpty('')

      if(user.name =='' || user.password =='' || user.email ==''){
        setCheckEmpty("Fill All Fields")
     
     
      }

      else if(user.name !=='' && user.password !=='' && user.email !==''){
        
        let textName = /^(.*[a-zA-Z].*){4,}$/
        let textEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        let textPassword = /^\d{5}$/

        if(!textName.test(user.name)){
          setCheckName("The Username should be contains 4 characters")
          console.log("hello")

        }
        if(!textEmail.test(user.email)){
          setCheckEmail("Enter Correct Email")

        }
        if(!textPassword.test(user.password)){
          setCheckPassword("The Password Should be 5 Numbers only")

        }
        console.log(user.name)

        if(textName.test(user.name) && textEmail.test(user.email) && textPassword.test(user.password)){
          axios.post('https://665736969f970b3b36c8658a.mockapi.io/form', {
           "name": user.name,
           "email": user.email,
           "password": user.password,
           "favorite":[],
           "read_books":[]

          }).then((res)=>{
           console.log(res.data)
           
           navigate('/')
           
          })
        
        
        }

      }
   
      }
      
  return (
    <div className='h-full max-sm:w-full max-sm:h-full'>
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
    onChange={changenames}
    
  />
  
</div>  
<span className='text-[#db4531]'>{checkNames}</span>

<div className="relative w-96 mt-2 max-sm:w-[90%] max-sm:flex max-sm:justify-center">
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 max-sm:left-3 max-sm:inset-y-3">
  <MdEmail className="text-gray-400"  />
  </span>
  <input
    type="email"
    className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 max-sm:w-[90%]"
    placeholder="Email"
    onChange={changeemails}   />
  
</div> 
<span className='text-[#db4531]'>{checkEmails}</span>
      
<div className="relative w-96 mt-2 max-sm:w-[90%] max-sm:flex max-sm:justify-center">
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 max-sm:left-3 max-sm:inset-y-3">
    <FaLock className="text-gray-400" />
  </span>
  <input
    type="password"
    className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 max-sm:w-[90%]"
    placeholder="Password"
    onChange={changepasswords}    
  />
  
</div> 
<span className='text-[#db4531]'>{checkPasswords}</span>
<span className='text-[#db4531]'>{checkEmpty}</span>


      <div className='min-w-96 max-sm:w-full'>
      <p className='mt-2 max-sm:ml-10 text-start px-2 max-sm:w-[90%]'>Already have account?  <Link to="/login">Login</Link></p>

        </div>  
      <button className='viewBook max-sm:w-[80%]  w-96 mt-6 py-[1.2vh] rounded-xl text-[1.rem] font-medium text-white' onClick={PostUsers}>SignUp</button>
      </div>
</div>
   
   </div>  
   <div className='mt-12'>
   <Footer/></div> 
      
    </div>
  )
}

export default Signup
