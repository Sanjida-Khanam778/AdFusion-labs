import { createBrowserRouter } from "react-router-dom";
import React from 'react'; 
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../layout/Dashboard";
import SignUpPage from "../pages/Home/SignUpPage/SignUpPage";
import Login from "../components/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout />,
        errorElement: <h1>404</h1>,
        children: [
            {       
                path: "/",
                element: <Home />,
            },
        
        ]
    
    },
    {       
        path: "/signup",
        element: <SignUpPage />,
    },
    {       
        path: "/login",
        element: <Login />,
    },
   {
    path: "/dashboard",
    element: <Dashboard />,
   }
])