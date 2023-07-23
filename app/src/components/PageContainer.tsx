import React from 'react';

interface Props {
    title: string;
    children: React.ReactNode
    error?: boolean;
    loading?: boolean;
}

const PageContainer: React.FC<Props> = ({ title, children, error = false, loading = false }) => {

    if ( error ) {
        return(
            <div className="h-fit min-h-full p-4 transition ease-in-out">
                <div className="
                    h-full p-4
                    bg-red-100
                    rounded-lg
                    border border-red-700 border-4
                ">
                    <h1 className="
                        text-4xl text-red-700 font-thin font-serif italic
                        flex
                    ">{title}: <h1 className="not-italic font-bold px-2"> error 😠</h1></h1>
                    <div className="p-2">
                        {children}
                    </div>
                </div>
            </div>
        )
    }

    if ( loading ) {
        return(
            <div className="h-fit min-h-full p-4 transition ease-in-out">
                <div className="
                h-full p-4
                bg-blue-100
                rounded-lg
                border border-blue-500 border-4
            ">
                <h1 className="
                    text-4xl text-black font-thin font-serif italic animate-pulse
                ">{title}: loading...</h1>
                <div className="p-2">

                </div>
                </div>
            </div>
        )
    }

    return(
        <div className="h-fit min-h-full p-4 transition ease-in-out">
            <div className="
                h-full p-4
                bg-white
                rounded-lg
                border border-slate-100 border-4
            ">
                <h1 className="
                    text-4xl text-black font-thin font-serif italic
                ">{title}:</h1>
                <div className="p-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PageContainer;