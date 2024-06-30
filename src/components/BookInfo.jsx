import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'

import Nav from './Nav'
import { parse } from 'postcss'

function BookInfo() {
    const {id} = useParams()
    console.log(id)
    const integer = parseInt(id)

    const [books, setBooks] = useState([])
    const [favorites, setFavorite] = useState([])
    const [readed, setRead] = useState([])

    const [user, setUser] = useState([])

    useEffect(()=>{
        bookDetails()
        

    }, [])



    const bookDetails = ()=>{

        axios.get('https://665736969f970b3b36c8658a.mockapi.io/Products')
        .then(function (response) {
          // handle success
          console.log(response);
        //   setBooks(response.data)

          let check =response.data.find((b)=> b.rank == id)
          console.log(check)
          setBooks(check)
        //  if(check){
        //     console.log("Hello world")
            
        //  }
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    
    
    }

    const AddFav = (id) => {
        const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
        if (getLocal) {
            axios.get('https://665736969f970b3b36c8658a.mockapi.io/form')
                .then(function (response) {
                    console.log(response.data);
                    setFavorite(response.data);
    
                    let check = response.data.find((b) => b.id == getLocal.id);
                    if (!check) {
                        return;
                    }
                    console.log(check);
    
                    let allValues = check.favorite || [];
                    // if (!Array.isArray(allValues)) {
                    //     allValues = [];
                    // }
                    if (!allValues.includes(id)) {
                        allValues.push(id);
                    }else{
                        alert("There is duplicate")
                    }

                    axios.put(`https://665736969f970b3b36c8658a.mockapi.io/form/${check.id}`, {
                        "name": check.name,
                        "email": check.email,
                        "password": check.password,
                        "favorite": allValues,
                        "read_books": check.read_books
                    })
                    .then(function (response) {
                        console.log( response.data);
                    })
                    .catch(function (error) {
                        console.error( error);
                    });
                })
                .catch(function (error) {
                    
                });
        }
    };

    const readBooks = (id) =>{
      const getLocal = JSON.parse(localStorage.getItem("loggedIn"));

      if (getLocal) {
        axios.get('https://665736969f970b3b36c8658a.mockapi.io/form')
            .then(function (response) {
                console.log(response.data);
                setRead(response.data);

                let check = response.data.find((b) => b.id == getLocal.id);
                if (!check) {
                    return;
                }
                console.log(check);

                let allValues = check.read_books || [];
                // if (!Array.isArray(allValues)) {
                //     allValues = [];
                // }
                if (!allValues.includes(id)) {
                    allValues.push(id);
                }else{
                    alert("Already Exists in Read List")
                }

               
                

                axios.put(`https://665736969f970b3b36c8658a.mockapi.io/form/${check.id}`, {
                    "name": check.name,
                    "email": check.email,
                    "password": check.password,
                    "favorite": check.favorite,
                    "read_books": allValues
                })
                .then(function (response) {
                    console.log( response.data);
                })
                .catch(function (error) {
                    console.error( error);
                });
            })
            .catch(function (error) {
                
            });
    }

      
    }
  return (
    <div className='w-full h-full max-sm:h-full'>
       <div>
       <Nav/>
        </div>
      <div>

        <div className='pt-32  flex justify-center items-center max-sm:flex-col max-sm:w-[100%] '>
        <div className='grid w-[80%] grid-cols-2 h-auto max-sm:flex max-sm:flex-col max-sm:w-[90%]  max-sm:justify-center max-sm:items-center '>
            <div >
                <img className="w-96 h-96 max-sm:w-[50vw] max-sm:h-[60vh]" src={books.book_image}></img>
            </div>  
            <div className='flex flex-col justify-center max-sm:mt-12'>
                <h2 className='text-[2.5rem] max-sm:text-[2rem]'>{books.title}</h2>
                
                <p className='mt-8'>{books.description}</p>
                <p className='mt-4'><b className='mr-2'>Author: </b>{books.author}</p>
                <span><b className='mr-2'>Seller: </b> <a href={books.amazon_product_url} className='mt-4' target="_blank" rel="noopener noreferrer">
                 Go to Buy
                </a></span>
                
             <div className='w-full flex gap-6'>
                
             <button className='viewBook w-[13vw] mt-12 py-2  rounded-xl text-[1.2rem] max-sm:w-[90%] max-sm:m-auto max-sm:mt-14 text-white' onClick={()=>AddFav(id)}>Add To Favorite</button>
             <button className='viewBook w-[13vw] mt-12 py-2  rounded-xl text-[1.2rem] max-sm:w-[90%] max-sm:m-auto max-sm:mt-14 text-white' onClick={()=>readBooks(id)}>Read</button>



              
             </div>
                

                
                

                
            </div>
        </div>
        </div>
        </div>

      <div className='mt-24'>
        <Footer/>
        </div>
    </div>
  )
}

export default BookInfo
