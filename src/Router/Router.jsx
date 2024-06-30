import React from 'react'
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Books from '../components/Books';
import BookInfo from '../components/BookInfo';
import Favorite from '../components/Favorite';
import Readbook from '../components/Readbook';

 

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
         
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
            path: "/signup",
            element: <Signup/>,
          },
          {
            path: "/books",
            element: <Books/>,
          },
          {
            path: "/bookinfo/:id",
            element: <BookInfo/>,
          },

          {
            path: "/favorite",
            element: <Favorite/>,
          },
          {
            path: "/read",
            element: <Readbook/>,
          },
      ]);
  return <RouterProvider router={router} />
    
}

export default Router
