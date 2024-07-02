import React from 'react';
import LandingGraphic from "./components/landing_graphic/landing_graphic";
import Caption from "./components/caption";

const Home: React.FC = () => {
    return(
        <>
            <LandingGraphic />
            <Caption />
        </>
    )
}

export default Home;