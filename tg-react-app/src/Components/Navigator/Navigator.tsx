import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Title from './Title';
import { Transition } from "@headlessui/react";
import {IoClose} from "react-icons/io5";
import {TbArticle} from "react-icons/tb";
import AboutSubMenu from "./SubMenus/About";
import PortfolioSubMenu from "./SubMenus/Portfolio";
import ContactSubMenu from "./SubMenus/Contact";
import About from "./SubMenus/About";
import BlogSubMenu from "./SubMenus/Blog";

const navButtonStyle: string = "h-full flex-1 mx-2 lowercase italic font-normal text-white text-xs sm:text-xl"

enum SubMenu {
    Blog,
    Portfolio,
    Contact,
    About
};

const Navigator: React.FC = () => {
    const [ subMenuOpen, setSubMenuOpen ] = useState<boolean>(false);
    const [ navNode, setNavNode ] = useState<HTMLElement | null>(null);
    const [ offsetHeight, setOffsetHeight ] = useState<number>(0);
    const [ currentSubMenu, setCurrentSubMenu ] = useState<SubMenu>(0);
    const [ isTransitioning, setIsTransitioning ] = useState<boolean>(false);

    const navigator = useNavigate();

    // callback ref for navigator height
    const navHeightRef = useCallback( ( node: HTMLElement | null ) => setNavNode(node), [setNavNode] );
    const updateOffsetHeight = () => {
        if ( navNode !== null && !subMenuOpen && !isTransitioning ) {
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

    // handle event when menu buttons are clicked
    const onMenuButtonClick = ( subMenu: SubMenu ) => {
        if ( subMenuOpen && currentSubMenu === subMenu ) {
            setSubMenuOpen(false);
            return;
        }
        setCurrentSubMenu(subMenu);
        setSubMenuOpen(true);
    }

    const menuIsSelected = ( subMenu: SubMenu ) => currentSubMenu == subMenu && subMenuOpen;

    const showSubMenu = () => {
        switch (currentSubMenu) {
            case SubMenu.Blog: return(<BlogSubMenu />);
            case SubMenu.Portfolio: return(<PortfolioSubMenu />);
            case SubMenu.Contact: return(<ContactSubMenu />);
            case SubMenu.About: return(<AboutSubMenu />);
        }
    }

    return(
        <div style={{ paddingTop: offsetHeight }}>
            <div ref={ navHeightRef } className="Navigator fixed top-0 w-full">
                <div className="
                    w-full h-fit relative
                    mb-1 sm:mb-5 pt-1 px-0 sm:px-4 flex
                    z-10 backdrop-blur-2xl backdrop-brightness-75
                ">
                    <div
                        className="absolute top-0 h-full w-full backdrop-blur-sm backdrop-opacity-90 z-20"
                        style={{ pointerEvents: "none" }}
                    />
                    <div className="px-2 mx-auto max-w-4xl flex-1 flex flex-col relative">
                        <Title />
                        <div className="
                            w-[98%] h-fit mt-auto mb-2 mx-auto rounded-md
                            border border-solid border-white border-[1px]
                        ">
                            <div className="flex justify-around h-8 sm:h-12">
                                <Button
                                    size="small"
                                    variant="text"
                                    className={`${navButtonStyle} ${ menuIsSelected(0) && "text-primary"}`}
                                    onClick={() => onMenuButtonClick(0)}
                                >
                                    blog
                                </Button>
                                <Button
                                    size="small"
                                    variant="text"
                                    className={`${navButtonStyle} ${ menuIsSelected(1) && "text-primary"}`}
                                    onClick={() => onMenuButtonClick(1)}
                                >
                                    portfolio
                                </Button>
                                <img src="/logo.svg" alt="puck logo" className="h-8 sm:h-12 mx-2 sm:mx-8 py-1 sm:py-2 invert"/>
                                <Button
                                    size="small"
                                    variant="text"
                                    className={`${navButtonStyle} ${ menuIsSelected(2) && "text-primary"}`}
                                    onClick={() => onMenuButtonClick(2)}
                                >
                                    contact
                                </Button>
                                <Button
                                    size="small"
                                    variant="text"
                                    className={`${navButtonStyle} ${ menuIsSelected(3) && "text-primary"}`}
                                    onClick={() => onMenuButtonClick(3)}
                                >
                                    about
                                </Button>
                            </div>
                            <Transition
                                show={ subMenuOpen }
                                beforeLeave={() => setIsTransitioning(true)}
                                afterLeave={() => setIsTransitioning(false)}
                                className="transition-all duration-500 overflow-hidden"
                                enter="ease-in-out" enterFrom="max-h-0" enterTo="max-h-60"
                                leave="ease-out" leaveFrom="max-h-60" leaveTo="max-h-0"
                            >
                                {showSubMenu()}
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigator;