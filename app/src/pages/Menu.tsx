import React from 'react';
import { Link } from "react-router-dom";

interface Props {
    children: React.ReactNode
    to: string
}

const MenuLink: React.FC<Props> = ({ children, to }) => {
    return(
        <Link className="
            ease-in-out duration-100
            m-7 w-48 py-4 hover:w-60
            text-3xl text-black font-thin font-serif italic
            bg-white rounded-lg
            flex items-center justify-center
        " to={to}>
            {children}
        </Link>
    )
}

const Menu: React.FC = () => {
    return(
        <div className="
            flex flex-col
            justify-center items-center
            w-full h-full
        ">
            <MenuLink to="/posts">posts</MenuLink>
            <MenuLink to="/about">about</MenuLink>
            <MenuLink to="/contact">contact</MenuLink>
        </div>
    )
}

export default Menu;