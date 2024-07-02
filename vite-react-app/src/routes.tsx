import React from 'react';
import {RouteObject} from "react-router-dom";
import App from "./app";
import Posts from "./pages/posts"
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio";
import Shop from "./pages/shop";
import DisplayError from "./pages/display_error";

export const Routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        errorElement: <DisplayError />,
        children: [
            { index: true, path: "home", element: <Home /> },
            { path: "posts", element: <Posts /> },
            { path: "shop", element: <Shop /> },
            { path: "portfolio", element: <Portfolio /> }
        ]
    }
]