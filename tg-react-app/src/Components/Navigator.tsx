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

const navButtonStyle: string = "h-full w-fit lowercase italic font-normal text-white text-xs sm:text-xl"

const Navigator: React.FC = () => {
    return(
        <div className="
            max-w-4xl w-full sm:w-[95%] h-20 sm:h-32
            mb-1 sm:mb-5 mt-2 mx-auto flex
        ">
            <div className="mx-2 flex-1 flex flex-col">
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
                    <img src="/logo.svg" alt="puck logo" className="h-full py-1 sm:py-2 ml-2 invert"/>
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