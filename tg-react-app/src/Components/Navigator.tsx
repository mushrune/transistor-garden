import React, {ReactNode} from 'react';
import { Button } from "@mui/material";

const title: ReactNode = (
    <span className="
        flex justify-around
        w-[98%] sm:w-full mt-0 sm:mt-1
        font-serif font-thin italic
        text-[20px] sm:text-5xl
    ">
        {'TRANSISTOR GARDEN'.split('').map( (char, index) => (
            <span key={index}>{char}</span>
        ))}
    </span>
)

const navButtonStyle: string = "h-full flex-1 mx-2 lowercase italic font-normal text-white text-xs sm:text-xl"

const Navigator: React.FC = () => {
    return(
        <div className="pt-20 sm:pt-36">
            <div className="fixed top-0 w-full">
                <div className="
                    w-full h-20 sm:h-32 relative
                    mb-1 sm:mb-5 pt-1 px-0 sm:px-4 flex
                    z-10 backdrop-blur-3xl backdrop-brightness-75
                ">
                    <div className="absolute top-0 h-full w-full backdrop-blur-sm backdrop-opacity-75 z-20" />
                    <div className="px-2 mx-auto max-w-4xl flex-1 flex flex-col relative">
                        {title}
                        <div className="
                            w-[98%] h-8 sm:h-14 mt-auto mb-2 mx-auto rounded-md
                            border border-solid border-white border-[1px]
                            flex justify-around
                        ">
                            <Button
                                size="small"
                                variant="text"
                                className={navButtonStyle}
                            >
                                about
                            </Button>
                            <Button
                                size="small"
                                variant="text"
                                className={navButtonStyle}
                            >
                                projects
                            </Button>
                            <img src="/logo.svg" alt="puck logo" className="h-full mx-2 sm:mx-8 py-1 sm:py-2 invert"/>
                            <Button
                                size="small"
                                variant="text"
                                className={navButtonStyle}
                            >
                                contact
                            </Button>
                            <Button
                                size="small"
                                variant="text"
                                className={navButtonStyle}
                            >
                                blog
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// <Typography variant="h2" className="
//                     tracking-widest text-6xl
//                     w-full
//                     whitespace-nowrap
//                 ">
//     TRANSISTOR GARDEN
// </Typography>
// <div className="
//                     w-[98%] flex-1 my-4 mr-auto rounded-xl
//                     border border-solid border-white border-[3px]
//                 ">
//
// </div>

export default Navigator;