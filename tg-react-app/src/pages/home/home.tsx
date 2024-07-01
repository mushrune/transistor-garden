import React from 'react';
import LandingGraphic from "./components/landing_graphic/landing_graphic";
import {Typography} from "@mui/material";

const Home: React.FC = () => {
    return(
        <>
            <LandingGraphic />
            <Typography variant="subtitle1" className="w-full text-center">Transistor Garden is a software and technology business owned and operated by Phoebe Fox</Typography>
        </>
    )
}

export default Home;