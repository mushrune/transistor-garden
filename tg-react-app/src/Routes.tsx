import React from 'react';
import {RouteObject} from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home"

export const Routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home />}
        ]
    }
]