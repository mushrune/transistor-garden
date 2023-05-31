import React, {useEffect, useState} from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";

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
                backdrop-filter backdrop-blur bg-green-900 bg-opacity-80
                w-full h-32
                flex items-center justify-center
                fixed top-0 left-0 z-50
            ">
                { !isMenu && <Link
                    to="/"
                    className="
                        absolute left-0 m-5 p-3 left-0
                        rounded-md
                        text-white bg-gray-900 text-xl
                    "
                    >Back</Link>
                }
                <h1 className="
                    text-4xl
                    font-serif
                    text-white
                ">TRANSISTOR GARDEN</h1>
            </div>
            {/* This is just a spacer component, places the outlet content below the menu */}
            <div className="
                pt-36
            " />
            <Outlet />
        </div>
    )
}

export default Navigator;