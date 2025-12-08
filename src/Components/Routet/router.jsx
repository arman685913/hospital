import React from 'react';
import Home from '../Home/Home';
import Root from '../Root/Root';
import App from '../../App.jsx'
import Book from '../Book/Book.jsx';
import Error from '../Error/Error.jsx';
import Blogs from '../../Blogs/Blogs.jsx';
import Details from '../Details/Details.jsx';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    hydrateFallback: <div>Loading...</div>,
    errorElement : <Error></Error>,
    children : [
        {
            index : true,
            loader : () => fetch('Doctors.json'),
            Component: Home
        },
        {
            path : 'app',
            Component : App
        },
        {
          path : 'book',
          Component : Book
        },
        {
          path : 'blogs',
          loader : () => fetch('blogs.json'),
          Component : Blogs
        },
        {
          path : 'contact',
          element : <Error></Error>
        },
        {
          path : 'doctor/:id',
          
          Component : Details
        },
    ],
  },
]);