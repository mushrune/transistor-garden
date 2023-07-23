import React from 'react';
import { Link } from "react-router-dom";
import { RiDragDropLine, RiEyeCloseLine } from "react-icons/ri";
import { FiBox, FiStar, FiLoader } from "react-icons/fi";

interface Props {
    children: React.ReactNode
    to: string
}

const MenuLink: React.FC<Props> = ({ children, to }) => {
    return(
        <Link className="
            ease-in-out duration-100
            m-7 w-60 py-4 px-4 hover:w-80
            text-3xl text-black font-thin font-serif italic
            bg-white rounded-lg
            flex items-center justify-center
            border border-slate-100 border-4
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
            w-full h-full min-h-full
        ">
            <MenuLink to="/projects">
                <FiBox size={40} className="flex-2"/>
                <h1 className="mx-2">projects</h1>
            </MenuLink>
            <MenuLink to="/about">
                <FiLoader size={40} className="flex-2"/>
                <h1 className="mx-2">about</h1>
            </MenuLink>
            <MenuLink to="/contact">
                <FiStar size={40} className="flex-2"/>
                <h1 className="mx-2">contact</h1>
            </MenuLink>
        </div>
    )
}

export default Menu;