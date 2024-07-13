import * as React from 'react';
import MuiMarkdown, {getOverrides, Overrides} from "mui-markdown";
import {Typography} from "@mui/material";

interface props {
    documentBody: string;
}

const overrides: Overrides = {
    ...getOverrides(),
    h1: {
        component: Typography,
        props: {
            variant: "h4",
            className: "text-4xl font-bold mb-4 text-center sm:text-left w-full italic"
        }
    },
    h2: {
        component: Typography,
        props: {
            variant: "h5",
            className: "text-2xl font-bold my-4 text-center sm:text-left w-full italic"
        }
    },
    h3: {
        component: Typography,
        props: {
            variant: "h5",
            className: "text-[14px] font-bold my-4 text-center sm:text-left w-full italic"
        }
    }
}

const MarkdownViewer: React.FC<props> = ({ documentBody }) => (
    <MuiMarkdown overrides={overrides}>{documentBody}</MuiMarkdown>
)

export default MarkdownViewer;