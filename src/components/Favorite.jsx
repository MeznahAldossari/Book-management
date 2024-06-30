import React, { useEffect } from 'react'
import Nav from './Nav'
import axios from 'axios';
import { useState } from 'react';
import close from '../assets/closes.png'
import { Link } from 'react-router-dom';
function Favorite() {
    const [mybooks, setMybooks] = useState([])
    const [remove, setRemove] = useState(false);
    
    useEffect(()=>{
        getFav()   
    },[])
    const getFav = () => {
        const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
        // console.log(getLocal.favorite)
       
            if(getLocal){
                console.log(getLocal.favorite)

                axios.get(`https://665736969f970b3b36c8658a.mockapi.io/form/${getLocal.id}`)
                .then(function (res) {

                    axios.get('https://665736969f970b3b36c8658a.mockapi.io/Products')
                    .then(function (res2) {
                     let favorites = res.data.favorite.map(id => parseInt(id))
                     let filters = res2.data.filter(book => favorites.includes(book.rank));
                     setMybooks(filters)
                     console.log("your data "+filters)
                    })

                //  let favorites = getLocal.favorite.map(id => parseInt(id))
                //  let filters = res.data.filter(book => favorites.includes(book.rank));
                //  setMybooks(filters)
                //  console.log("your data "+filters)
                })


               

            }
          






            // axios.get(`https://665736969f970b3b36c8658a.mockapi.io/form/${getLocal.id}`)
            //     .then(function (response) {
            //         console.log(typeof response.data.favorite);
    
            //         axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=CtpjqJfu0CIJRKXv8iyX1jhA7qzRAcC9')
            //             .then(function (res) {
            //                 const resultFav = res.data.results.books.filter(book => book.rank === response.data.favorite[0]);
            //                 console.log(resultFav);
            //                 setMybooks(resultFav);
            //             })
            //             .catch(function (error) {
            //                 console.log(error);
            //             });
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        
    }
    const removeItem = (id) => {
        console.log("ID passed to removeItem:", id);
        setRemove(false);
        const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
        if (getLocal) {
            axios.get(`https://665736969f970b3b36c8658a.mockapi.io/form/${getLocal.id}`).then((res) => {
                console.log("Favorite list before filtering:", res.data.favorite);
                console.log("ID to be removed:", id);
               console.log(typeof id)
            //    let StringID = String(id)
                // let favorites = res.data.favorite.map(id => parseInt(id))

                const updatedFavorites = res.data.favorite.filter(ids => parseInt(ids) !== id);
                
                // console.log("Favorite list after filtering:", allbook);
    
                setMybooks(mybooks.filter(book => book.rank !== id));
                setRemove(true);
                
                axios.put(`https://665736969f970b3b36c8658a.mockapi.io/form/${getLocal.id}`, {
                favorite: updatedFavorites
                }).then((response) => {
                    console.log("Favorite item removed successfully:", response.data);
                });
            });
        }
    };
  return (
    <div className='w-full'>
        <div>
        <Nav/>
        </div>

        <div className='flex flex-col w-full py-24'>
    
            <div className='w-full'>
                <h1 className='text-[2.2rem] ml-8 mt-6'>Favorite Books</h1>
            <div className='w-full mt-10  h-auto flex flex-col items-center'>
       {/* {arr.length} */}

        <div className='w-full grid grid-cols-4 gap-6 px-12 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:h-auto '>
        {mybooks.map((character, index)=>(
            <div className="card  myCards bg-base-100 flex flex-col items-center justify-center shadow-xl h-auto" key={index}>
                <div className='flex justify-end items-start w-full'>
               <button onClick={()=>{removeItem(character.rank)}}><img className='w-4 mr-2 mt-2 cursor-pointer'  src={close}></img></button> 
                    </div>
                <img className='pt-6 w-[80%] h-[40vh] max-sm:w-[45%]'  src={character.book_image}></img>

               
                <p className='mt-6 text-center text-md font-medium '>{character.title}</p>
                {/* <div className='flex justify-center gap-4 mb-6 '>
                    <button className='btns py-1 bg-[#b28ae3] ' onClick={()=>{nextPage(character.id)}}>View Details</button>
                </div> */}
                <div className='flex justify-center gap-4 mt-4 pb-8 w-[90%]'>
                <Link to={`/bookinfo/${character.rank}`} className='max-sm:w-[90%]'>
               <button className='viewBook w-[10vw] px-2   py-1 rounded-md text-[1rem] text-white max-sm:w-[100%]' >View Detials</button>
               </Link>

            </div>
</div>
))}
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

      
    </div>
  )
}

export default Favorite
