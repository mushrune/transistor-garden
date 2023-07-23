import React from 'react';
import { MdOpenInNew } from 'react-icons/md';

interface Props {
    id: string;
    title: string;
    caption: string;
    link: string;
    previewPictureUrl: string;
}

const ProjectPreview: React.FC<Props> = ({ title, caption, link, previewPictureUrl }) => {
    return(
        <a
            className="
                w-full h-32
                my-4
                flex
                text-left
            "
            href={link}
            target="_blank"
        >
            <div className="relative w-28 h-28 mr-2 aspect-square" >
                    <img className="
                        absolute top-0 left-0
                        w-full h-full aspect-square
                        rounded-lg
                        object-cover
                    " alt={`Thumbnail for ${title}`} src={previewPictureUrl} />
            </div>
            <div className="
                relative
                w-full h-28
                bg-slate-100 hover:bg-blue-50
                p-2 rounded-lg
                border-2 hover:border-blue-500 border-slate-200 hover:cursor-pointer
                transition ease-in-out duration-200
                truncate
            ">
                <h1 className="
                    font-semibold text-xl
                    truncate
                ">{title}</h1>
                <p className="
                    italic font-serif my-1
                    truncate
                ">{caption}</p>
                <h3 className="
                    relative top-0 right-0
                    bg-slate-200
                    p-1 my-1 rounded-md w-fit h-fit
                    text-sm
                    flex items-center
                ">
                    <MdOpenInNew size={17} className="mr-1"/>
                    {link}
                </h3>
                <a className="hidden w-full h-full absolute z-10" href={link} target="_blank" />
            </div>
        </a>
    )
}

export default ProjectPreview;
export type { Props };