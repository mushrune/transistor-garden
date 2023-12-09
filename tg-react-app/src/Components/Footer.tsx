import { Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
    const currentYear: number = (new Date()).getFullYear();

    return(
        <div>
            <div className="
            flex items-center
            h-10 p-3 w-full
            select-none
        ">
                <Typography variant="subtitle2" className="text-[10px] font-center">
                    © {currentYear} TRANSISTOR GARDEN
                </Typography>
                <img src="/logo.svg" alt="puck logo" className="h-full ml-auto pr-1 invert"/>
            </div>
        </div>
    )
}

export default Footer;