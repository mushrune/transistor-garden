import React from 'react';
import { Link } from "react-router-dom";

const linkFormatting: string = "m-2"

const Menu: React.FC = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <Link className={`${linkFormatting}`} to="/posts">POSTS</Link>
            <Link className={`${linkFormatting}`} to="/about">ABOUT</Link>
            <Link className={`${linkFormatting}`} to="/contact">CONTACT</Link>
        </div>
    )
}

export default Menu;