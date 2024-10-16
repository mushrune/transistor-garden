import * as React from 'react';
import Graphic from "./graphic/Graphic";
import { Typography } from "@mui/material";

const Home: React.FC = () => {
    return(
        <>
            <Graphic />
            <div className="w-full flex flex-col items-center sm:text-[24px] text-[14px]">
                <Typography variant="body1" className="w-full text-center sm:text-[24px] text-[16px]">Transistor Garden is a software and technology business owned and operated by Phoebe Fox</Typography>
            </div>
        </>
    )
}

export default Home;