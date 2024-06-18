import React, {useMemo} from 'react';
import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router-dom";
import {Button, Typography} from "@mui/material";
import logo from '../logo/logo.svg';

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
            <div className="super-center flex flex-col w-48">
                <Typography variant="body1">
                    {errorMemo}
                </Typography>
                <Typography
                    variant="subtitle1"
                    className="py-1 px-2 mt-2 bg-red-400 rounded-md border-solid border-1 border-red-500">
                    {errorMessage}
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    className="mt-2 lowercase"
                    onClick={() => navigate("")}
                >
                    go home
                </Button>
            </div>
        </>
    )
}

export default DisplayError;