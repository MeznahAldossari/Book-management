import React, {useState,useEffect} from 'react'
import Nav from './Nav'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function Readbook() {
  const [myReading, setMyReading] = useState([])

  useEffect(()=>{
    getFav()   
},[])
const getFav = () => {
    const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
    // console.log(getLocal.favorite)
   
        if(getLocal){
            console.log(getLocal.read_books)

            axios.get(`https://665736969f970b3b36c8658a.mockapi.io/form/${getLocal.id}`)
            .then(function (res) {

                axios.get('https://665736969f970b3b36c8658a.mockapi.io/Products')
                .then(function (res2) {
                 let read_books = res.data.read_books.map(id => parseInt(id))
                 let filters = res2.data.filter(book => read_books.includes(book.rank));
                 setMyReading(filters)
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


  return (
    <div>
      <div>
        <Nav/>
        </div>
        <div className='flex flex-col w-full py-24'>
    
            <div className='w-full'>
                <h1 className='text-[2.2rem] ml-8 mt-6'>Read List</h1>
            <div className='w-full mt-10  h-auto flex flex-col items-center'>
       {/* {arr.length} */}

        <div className='w-full grid grid-cols-4 gap-6 px-12 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:h-auto '>
        {myReading.map((character, index)=>(
            <div className="card  myCards bg-base-100 flex flex-col items-center justify-center shadow-xl h-auto" key={index}>
                
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
        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default Readbook
