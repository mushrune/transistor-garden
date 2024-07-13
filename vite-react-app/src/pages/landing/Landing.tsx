import * as React from 'react';
import Graphic from "./graphic/Graphic";
import { Typography } from "@mui/material";
import TgButton from "../../components/mui/TgButton";

const Landing: React.FC = () => {
    return(
        <>
            <Graphic />
            <div className="w-full flex flex-col items-center sm:text-[24px] text-[14px]">
                <Typography variant="body1" className="w-full text-center sm:text-[24px] text-[16px]">Transistor Garden is a software and technology business owned and operated by Phoebe Fox</Typography>
                <TgButton variant="outlined" className="mt-4 sm:text-[24px]">more about phoebe</TgButton>
            </div>
        </>
    )
}

export default Landing;