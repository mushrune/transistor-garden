import React from 'react';
import {Button, Typography} from "@mui/material";
import { TbShield } from "react-icons/tb";

const ButtonStyle: string = "text-xs italic lowercase font-normal text-white hover:text-primary"

const AboutSubMenu: React.FC = () => {
    return(
        <div className="max-h-60 h-fit px-4 py-1 flex flex-col">
            <Button
                className={ButtonStyle}
            >
                Project Staging
            </Button>
            <Button className={ButtonStyle}>Principles of Design</Button>
            <Button className={ButtonStyle}>Application Architecture</Button>
            <Button
                className={ButtonStyle}
                startIcon={<TbShield size={15} />}
            >
                Security Model
            </Button>
        </div>
    )
}

export default AboutSubMenu;