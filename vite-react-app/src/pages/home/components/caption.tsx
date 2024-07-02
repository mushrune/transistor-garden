import React from 'react';
import {Typography} from "@mui/material";
import Text from '../docs/descriptors.txt?raw';

const Descriptors: string[] = Text.split('\n');

const Caption: React.FC = () => {
    console.log(Descriptors)

    return(
        <div className="w-full flex flex-col items-center">
            <Typography variant="subtitle1" className="w-full text-center">Transistor Garden is a software and technology business owned and operated by Phoebe Fox</Typography>
            <Typography variant="subtitle1" className="w-full text-center">Phoebe is</Typography>
        </div>
    )
}

export default Caption;