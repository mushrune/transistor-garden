import * as React from 'react';
import { RouteObject } from "react-router-dom";
import App from "./App";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/home/Home";
import Shop from "./pages/Shop";
import DisplayError from "./pages/DisplayError";
import HireMe from "./pages/hireMe/HireMe";

export const Routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        errorElement: <DisplayError />,
        children: [
            { index: true, element: <Home /> },
            { path: "portfolio", element: <Portfolio /> },
            { path: "shop", element: <Shop /> },
            { path: "hire-me", element: <HireMe />}
        ]
    }
]