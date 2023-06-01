import React, {useEffect, useState} from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';

const Navigator: React.FC = () => {
    const [isMenu, setIsMenu] = useState<boolean>(true);
    const location = useLocation();

    useEffect(() => {
        if ( location.pathname === "/" ) {
            setIsMenu(true);
        } else {
            setIsMenu(false);
        }
    }, [location] )

    return (
        <div>
            <div className="
                backdrop-filter backdrop-blur bg-black bg-opacity-30
                w-full h-32
                flex items-center justify-center
                fixed top-0 left-0 z-50
            ">
                { !isMenu && <Link
                    to="/"
                    className="
                        absolute right-0 my-7 mx-10 p-2
                        rounded-md
                    ">
                    <AiOutlineMenu className="w-10 h-10 invert" />
                </Link>
                }
                <div className="
                    flex items-center justify-center
                    sm:mx-32
                    mr-48
                    ml-24
                    h-full
                ">
                    <img alt="Transistor Garden LLC logo" src={`${process.env.PUBLIC_URL}/logo512.png`} className="
                        sm:h-32 sm:w-32 sm:p-4
                        h-20 w-20 p-2
                    "/>
                    <h1 className="
                        sm:text-4xl
                        text-2xl
                        font-serif
                        text-white
                    ">TRANSISTOR GARDEN</h1>
                </div>
            </div>
            {/* This is just a spacer component, places the outlet content below the menu */}
            <div className="
                pt-32
                h-screen
            ">
                <Outlet />
            </div>
        </div>
    )
}

export default Navigator;