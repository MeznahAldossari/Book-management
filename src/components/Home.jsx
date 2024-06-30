import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Nav from './Nav'
import homeLogo from '../assets/homeLogo.png'
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import books from '../assets/book2.png'
function Home() {
    // let url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=CtpjqJfu0CIJRKXv8iyX1jhA7qzRAcC9"
    // const [books, setBooks] = useState([])
    // useEffect(()=>{
    //   booksList()

    // }, [])

//     const booksList = ()=>{

//       axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=CtpjqJfu0CIJRKXv8iyX1jhA7qzRAcC9')
//       .then(function (response) {
//         // handle success
//         console.log(response.data.results.books);
//         setBooks(response.data.results.books)
        
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       .finally(function () {
//         // always executed
//       });
// }
        
    
  

  return (
    <div className='w-full' >
     <Nav/>

     <div className='w-full h-[98vh]  grid grid-cols-2 max-sm:flex max-sm:flex-col max-sm:w-100%  justify-center bg-[#f6eddd]'> 
    
      <div className='w-full  mt-24 flex flex-col justify-center max-sm:mt-10 max-sm:justify-start max-sm:h-auto '>
        <h1 className='text-[3rem] pl-24 max-sm:text-[2rem] max-sm:pl-10 max-sm:mt-6 font-medium'>Our Library</h1>
        <p className='text-[1.5rem] mt-4 pl-24 max-sm:text-[1.1rem] max-sm:pl-10 max-sm:pr-10'>Offers a variety of Books to start your research or discover something new!</p>
        <Link to="/books">        
            <button className='viewBook ml-24 max-sm:ml-10 max-sm:mt-6 w-[13vw] mt-12 py-2 rounded-xl text-[1.2rem] font-medium text-white max-sm:w-[30%] max-sm:text-[1rem]'>View More</button>

        </Link>
      </div>

      <div className='w-full flex mt-12 justify-center '>
        <img src={homeLogo} className='w-[33vw] mt-12 h-[34vw] max-sm:hidden'></img>
      </div>
    
     </div>

     <div className='w-full flex justify-center items-center bg-white'>
      <div className='grid grid-cols-2 w-[95%] max-sm:flex max-sm:w-full max-sm' >
        <div>
          <img className='w-[33vw] mt-10 h-[34vw] max-sm:hidden' src={books}></img>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-start max-sm:text-center max-sm:mt-12 font-medium text-[2.5rem] max-sm:text-[2rem]  w-full'>About Us</h1>
            <p className='mt-12 max-sm:mx-12 mr-32 text-justify max-sm:pb-12 text-[1.5rem]'>
            Our Website  provides books, and where people can view and read them

            </p>
          </div>


        
      
     
{/* <div className='flex justify-center flex-col items-center'>
  <div className='w-[90%] flex justify-end py-4'>
  <input type='search' placeholder='Search' className='w-[20%] mt-6 rounded-md pl-2 py-1'></input>
  
  </div>
  <hr className="border-gray-300 mt-6 w-full" />
  <div className='grid grid-cols-4 gap-6 w-[70vw] mt-12 '>
    {books.slice(0,8).map((e,index)=>(
      <div className="card bookCard bg-base-100 flex h-[50vh] flex-col items-center justify-center shadow-xl" key={index}>
      <img className='pt-2 w-[90%] h-[65%] max-sm:w-[45%]' src={e.book_image} alt={e.title} />

      <p className='mt-6 text-center text-md font-medium text-[#5f6e36]'>{e.title}</p>
      
  </div>
    
    ))}
  
</div>

</div> */}

{/* <p className='text-[1rem] mt-14 text-[#5f6e36] text-center cursor-pointer'>View More Books</p> */}

       
      </div>
     </div>

     <div className='flex flex-col mt-16 pb-12 items-center'>
  <h2 className='text-center font-medium text-[2.5rem] max-sm:text-[2rem]'>The Books Authors</h2>
  <div className='grid grid-cols-3 py-14 mt-6 place-items-center w-[70%]'>
    <div>
      <img src={person1} className='w-44 h-44 rounded-full' alt="Person 1"></img>
    </div>
    <div>
      <img src={person2} className='w-44 h-44 rounded-full' alt="Person 2"></img>
    </div>
    <div>
      <img src={person3} className='w-44 h-44 rounded-full' alt="Person 3"></img>
    </div>
  </div>
</div>
     <div className='w-full mt-12'>
     <Footer/>

     </div>
     
      
      
    







      {/* <div className='grid grid-cols-4 gap-6 '>
      {books.map((e,index)=>(
        <div key={index} className='h-[50vh] mt-8'>
            <img src={e.book_image}></img>
        </div>
      
      ))}
    
  </div> */}
      </div>
      
   
  )
}

export default Home
