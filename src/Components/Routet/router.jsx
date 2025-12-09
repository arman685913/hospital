import React from 'react';
import Home from '../Home/Home';
import Root from '../Root/Root';
import App from '../../App.jsx'
import Book from '../Book/Book.jsx';
import Error from '../Error/Error.jsx';
import Blogs from '../../Blogs/Blogs.jsx';
import Details from '../Details/Details.jsx';
import { createBrowserRouter } from 'react-router';
import Error2 from '../Error/Error2.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
  
    children : [
        {
            index : true,
            loader : async () => {
              const res = await fetch('/Doctors.json');
              const data = await res.json();
              return data;
            },
            Component: Home
        },
        {
            path : '*',
            Component : Error
        },
        {
          path : '/book',
          loader : async () =>{ 
            const res = await fetch('/Doctors.json')
            const data = await res.json()
            return data
          },
          Component : Book
        },
        {
          path : '/blogs',
          loader : async () =>{ 
            const res = await fetch('/blogs.json')
            const data = await res.json()
            return data
          },
          Component : Blogs
        },
        {
          path : '/contact',
          Component : Error
        },
        {
          path : '/doctor/:id',
          loader : async () =>{ 
            const res = await fetch('/Doctors.json');
            const data = await res.json();
            return data ;
          },
          Component : Details,
          errorElement : <Error2></Error2>
        },
    ],
  },
]);