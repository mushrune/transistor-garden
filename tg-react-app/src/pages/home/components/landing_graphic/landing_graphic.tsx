import React, {useCallback, useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import RotatingCube from './three/rotating_cube';

const LandingGraphic: React.FC = () => {

    const [ size, setSize ] = useState<number>(0);

    // this block of code here captures the width of the parent node
    const [ parentNode, setParentNode ] = useState<HTMLElement | null>(null);
    const parentNodeRef = useCallback( ( node: HTMLElement | null ) => setParentNode( node ), [setParentNode] );
    let handleResize = () => {
        if ( parentNode !== null ) {
            setSize( parentNode.getBoundingClientRect().width );
            console.log(size)
        }
    }

    // this side effect uses a resize observer to track the size of the parent node
    useEffect( () => {
        if ( parentNode !== null ) {
            const observer = new ResizeObserver( handleResize );
            observer.observe( parentNode );

            return () => {
                observer.disconnect();
            }
        }
    })

    return(
        <div className="w-full px-8">
            <div ref={parentNodeRef} className="w-full relative" style={{ height: size }}>
                <Typography
                    variant="h4"
                    className="
                        text-[72px] text-center font-normal italic
                        absolute top-[50%] -translate-y-[50%]
                        z-10 mx-auto w-full
                    "
                >welcome</Typography>
                <RotatingCube size={size} />
            </div>
        </div>
    )
}

export default LandingGraphic;