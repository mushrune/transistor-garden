import * as React from 'react';
import { RouteObject } from "react-router-dom";
import App from "./App";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/Portfolio";
import Shop from "./pages/Shop";
import DisplayError from "./pages/DisplayError";
import About from "./pages/About";
import HireMe from "./pages/hireMe/HireMe";

export const Routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        errorElement: <DisplayError />,
        children: [
            { index: true, element: <Landing /> },
            { path: "about", element: <About /> },
            { path: "portfolio", element: <Portfolio /> },
            { path: "shop", element: <Shop /> },
            { path: "hire-me", element: <HireMe />}
        ]
    }
]