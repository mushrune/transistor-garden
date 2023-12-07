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
                <img src="/tg_logo192.png" alt="puck logo" className="h-full ml-2 pr-1"/>
            </div>
        </div>
    )
}

export default Footer;