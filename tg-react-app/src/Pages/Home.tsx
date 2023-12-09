import React from 'react';
import {Paper, Typography} from "@mui/material";

const Home: React.FC = () => {

    return(
        <Paper className="w-full h-[1000px] pt-4 px-8" elevation={0}>
            <Typography variant="h1">Blog</Typography>
        </Paper>
    )
}

export default Home;