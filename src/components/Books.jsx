import React from 'react'
import Nav from './Nav'
import axios from 'axios'
import homeLogo from '../assets/homeLogo.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import search from '../assets/download.png'


function Books() {
    const [books, setBooks] = useState([])
    const [searchs, setsearch] = useState('')
    const [bookRes, setBookRes] = useState([])
    const [check, setCheck] = useState(false);
    useEffect(()=>{
      booksList()

    }, [])



    const booksList = ()=>{

        axios.get('https://665736969f970b3b36c8658a.mockapi.io/Products')
        .then(function (response) {
          // handle success
          console.log(response.data);
          setBooks(response.data)
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    
    
    }
    const SearchChange = (e) => {
      setsearch(e.target.value);
      setBookRes([])
      setCheck(false);
    };
    const inputSearch = () => {
      if (!check) {
        const findWord = books.filter(book =>
          searchs.toLowerCase().split(' ').some(singleBook =>
            book.title.toLowerCase().includes(singleBook)
          )
        );
        setBookRes(findWord);
        setCheck(true);
      }
    };
  return (
    <div className='w-full'>
        <div>
        <Nav/>
        </div>

        <div className='flex flex-col w-full py-24'>
    
            <div>
            <div className='w-full mt-6  h-auto flex flex-col items-center'>
       {/* {arr.length} */}
       <div className='w-[93%] h-auto flex justify-end max-sm:justify-center'>
       <button className='bg-[#f4ac4e] rounded-md mr-2 px-1 text-center ml-5'><img src={search} className='w-8 mr' onClick={inputSearch}></img></button>
       <input value={searchs} type="text" className="text-end pr-2 w-[20vw] h-[8vh] rounded-lg max-sm:w-[70%] "placeholder='search' onChange={SearchChange}/>
       </div>

        <div className='w-full mt-14 grid grid-cols-4 gap-6 px-12 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:h-auto '>
        {bookRes.length === 0 ? (
              books.map((e, index) => (
                <div className="card myCards bg-base-100 flex flex-col items-center justify-center shadow-xl h-auto" key={index}>
                  <img
                    className='pt-6 w-[80%] h-[40vh] max-sm:w-[40%] max-sm:h-[40vh]'
                    src={e.book_image}
                    alt={`Cover of ${e.title}`}
                  />
                  <p className='mt-8 text-center text-md font-medium'>{e.title}</p>
                  <div className='flex justify-center gap-4 mt-4 pb-8 w-[90%] max-sm:w-full'>
                    <Link to={`/bookinfo/${e.rank}`} className='max-sm:w-[90%]'>
                      <button className='viewBook w-[10vw] px-2 py-1 rounded-md text-[1rem] text-white max-sm:w-[100%]'>View Details</button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              bookRes.map((e, index) => (
                <div className="card myCards bg-base-100 flex flex-col items-center justify-center shadow-xl h-auto" key={index}>
                  <img
                    className='pt-6 w-[80%] h-[40vh] max-sm:w-[40%] max-sm:h-[40vh]'
                    src={e.book_image}
                    alt={`Cover of ${e.title}`}
                  />
                  <p className='mt-8 text-center text-md font-medium'>{e.title}</p>
                  <div className='flex justify-center gap-4 mt-4 pb-8 w-[90%] max-sm:w-full'>
                    <Link to={`/bookinfo/${e.rank}`} className='max-sm:w-[90%]'>
                      <button className='viewBook w-[10vw] px-2 py-1 rounded-md text-[1rem] text-white max-sm:w-[100%]'>View Details</button>
                    </Link>
                  </div>
                </div>
              ))
            )}
            {/* {arr.map((character, index)=>(
                <div key={index} className='cards'>
                    <img  src={character.img_url}></img>
                    <p className='text-center'>{character.name}</p>
                
                </div>
            ))} */}
        </div>
      
    </div>
            </div>


            
        </div>
<div className='mt-14 w-full'>
<Footer/></div>
      
    </div>
  )
}

export default Books

