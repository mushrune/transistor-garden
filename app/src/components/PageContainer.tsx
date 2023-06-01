import React from 'react';

interface Props {
    title: string;
    children: React.ReactNode
}

const PageContainer: React.FC<Props> = ({ title, children }) => {
    return(
        <div className="h-full p-4">
            <div className="
                h-full p-4
                bg-white
                rounded-lg
            ">
                <h1 className="
                    text-3xl text-black font-thin font-serif italic
                ">{title}:</h1>
                <div className="p-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PageContainer;