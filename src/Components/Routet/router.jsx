import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Home/Home';
import Root from '../Root/Root';
import App from '../../App.jsx'

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : [
        {
            index : true,
            Component: Home
        },
        {
            path : 'app',
            Component : App
        }
    ]
  },
]);