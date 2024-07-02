import React from 'react';
import {Paper} from "@mui/material";

interface props {
    children: React.ReactNode
}

const Page: React.FC<props> = ({ children }) => {
    return(
        <Paper className="w-full h-fit pt-4 px-8" elevation={0}>
            {children}
        </Paper>
    )
}

export default Page;