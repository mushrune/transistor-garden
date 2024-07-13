import * as React from 'react';
import  { useMemo } from 'react';
import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Typography } from "@mui/material";
import TgButton from "../components/mui/TgButton";
import logo from '../images/logo.svg';

const errorMemos: string[] = [
    "hmm... that isn't right",
    "oops!",
    "something went wrong"
];

const DisplayError: React.FC = () => {

    const errorMemo = useMemo( () => errorMemos[Math.floor(Math.random() * errorMemos.length)], [])

    let navigate = useNavigate();
    let error = useRouteError();

    let errorMessage: string;

    if ( isRouteErrorResponse(error) ) {
        errorMessage = `${error.status}: ${error.statusText}`;
    } else if ( error instanceof Error ) {
        errorMessage = error.message;
    } else if ( typeof error === 'string' ) {
        errorMessage = error
    } else {
        console.error(error);
        errorMessage = 'unknown error'
    }

    return(
        <>
            <img
                src={logo} alt="puck logo"
                className="super-center -z-10 w-[80%] invert opacity-10"
            />
            <div className="super-center flex flex-col w-full px-10">
                <Typography variant="h4" className="text-center px-4">
                    {errorMemo}
                </Typography>
                <Typography variant="body1" className="mt-8 mb-1 text-red-400">error message:</Typography>
                <Typography
                    variant="body1"
                    className="py-2 px-4 mb-8 bg-red-400 rounded-md">
                    {errorMessage}
                </Typography>
                <TgButton
                    variant="contained"
                    size="large"
                    className="mt-2 lowercase mx-8"
                    onClick={() => navigate("")}
                >
                    go home
                </TgButton>
            </div>
        </>
    )
}

export default DisplayError;