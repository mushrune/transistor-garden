import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Title from './Title';
import logo from '../images/logo.svg';

const navButtonStyle: string = "h-full flex-1 mx-2 lowercase italic font-normal text-white text-sm sm:text-[28px]"

// this component is wired up to expand when more options are added... will be keeping this here for that purpose.
const Navigator: React.FC = () => {

    let navigator = useNavigate();

    const [ navNode, setNavNode ] = useState<HTMLElement | null>(null);
    const [ offsetHeight, setOffsetHeight ] = useState<number>(0);

    // callback ref for navigator height
    const navHeightRef = useCallback( ( node: HTMLElement | null ) => setNavNode(node), [setNavNode] );
    const updateOffsetHeight = () => {
        if ( navNode !== null ) {
            const height = navNode.getBoundingClientRect().height
            setOffsetHeight(height);
        }
    }

    // setup for resize observer
    useEffect(() => {
        if ( navNode !== null ) {
            const observer = new ResizeObserver(updateOffsetHeight)
            observer.observe(navNode);

            return () => {
                observer.disconnect();
            }
        }
    })

    return(
        <>
            <div style={{paddingTop: offsetHeight}} />
            {/* primary container for the browser, blurs items behind it */}
            <div ref={navHeightRef} className="Navigator
                fixed top-0
                w-full h-fit z-[3000]
                backdrop-blur-2xl backdrop-brightness-75
            ">
                {/* this extra div is here to control how wide the navigator is at different screen resolutions*/}
                <div className="
                    w-full sm:max-w-7xl mx-auto
                ">
                    {/* blurs navigator to create a "shine" effect */}
                    <div
                        className="absolute top-0 h-full w-full backdrop-blur-sm backdrop-opacity-90 z-[3030]"
                        style={{ pointerEvents: "none" }}
                    />
                    <Title />
                    <div className="
                        w-[98%] h-fit mt-auto mb-2 mx-auto rounded-md
                        border-solid border-white border-[1px]
                    ">
                        <div className="flex justify-around h-10 sm:h-16">
                            <Button
                                size="small"
                                variant="text"
                                onClick={() => navigator("")}
                                className={navButtonStyle}
                            >
                                home
                            </Button>
                            <Button
                                size="small"
                                variant="text"
                                onClick={() => navigator("portfolio")}
                                className={navButtonStyle}
                            >
                                portfolio
                            </Button>
                            <img
                                src={logo}
                                alt="puck logo"
                                className="h-10 sm:h-16 mx-2 sm:mx-8 py-1 sm:py-2 invert"
                            />
                            <Button
                                size="small"
                                variant="text"
                                onClick={() => navigator("hire-me")}
                                className={navButtonStyle}
                            >
                                hire me
                            </Button>
                            <Button
                                size="small"
                                variant="text"
                                onClick={() => navigator("shop")}
                                className={navButtonStyle}
                            >
                                shop
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigator;