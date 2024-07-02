import * as React from 'react';
import {RouteObject} from "react-router-dom";
import App from "./app";
import Posts from "./pages/posts"
import Landing from "./pages/landing/landing";
import Portfolio from "./pages/portfolio";
import Shop from "./pages/shop";
import DisplayError from "./pages/display_error";

export const Routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        errorElement: <DisplayError />,
        children: [
            { index: true, path: "", element: <Landing /> },
            { path: "posts", element: <Posts /> },
            { path: "shop", element: <Shop /> },
            { path: "portfolio", element: <Portfolio /> }
        ]
    }
]