import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import stack from '../assets/stack.png'

import { Link, useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()

    const getLocal = JSON.parse(localStorage.getItem("loggedIn"));

    const logout = ()=>{
        localStorage.removeItem("loggedIn")
        navigate('/')
        navigate(0)
    
    }

  return (
    <div className='w-full bg-slate-500'>
        <nav className='w-full h-[14vh] bg-[#f6eddd]'>
            <ul className='w-full flex items-center justify-between h-full  gap-4'>
                <dvi className="ml-4">
                    <Link to="/"><img alt='Logo ' src={stack} width={45}></img></Link>
                  
                </dvi>
                <div className='flex gap-4 me-6 '>
                
                {getLocal ? (
                    <>
                       <Link to="/books"><li className='li text-[1.1rem]'>Books</li></Link>
                        <Link to="/favorite"><li className='li text-[1.1rem]'>Favorite Books</li></Link>
                        <Link to="/read"><li className='li text-[1.1rem]'>Read List</li></Link>

                        <li className='li text-[1.1rem] cursor-pointer' onClick={logout}>Log Out</li>
                    </>
                    ) : (
                    <>
                        <Link to="/signup" className='li'><li className='li text-[1.1rem]'>Sign Up</li></Link>
                        <Link to="/login" className='li'><li className='li text-[1.1rem]'>Login</li></Link>
                    </>
                    )}
                                        
                 


                </div>
               
            </ul>
        </nav>
      
    </div>
  )
}

export default Nav
