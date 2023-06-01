import React from 'react';
import ReactMarkdown from "react-markdown";

interface Props {
    markdown: string
}

const MarkdownContainer: React.FC<Props> = ({ markdown }) => {
    return(
        <ReactMarkdown
            children={markdown}
            components={{
                h2: ({ node, ...props}) => <h1 className="text-2xl font-bold" {...props} />,
                p: ({node, ...props}) => <p className="text-base" {...props} />,
                a: ({node, ...props}) => <a className="text-blue-600" {...props} />
            }}
        />
    )
}

export default MarkdownContainer;