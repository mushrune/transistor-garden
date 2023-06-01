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
                h2: ({ node, ...props}) => <h1 className="text-2xl font-bold" {...props} />, /* eslint jsx-a11y/heading-has-content: "off" */
                p: ({node, ...props}) => <p className="text-base" {...props} />,
                a: ({node, ...props}) => <a className="text-blue-600" {...props} /> /* eslint jsx-a11y/anchor-has-content: "off" */
            }}
        />
    )
}

export default MarkdownContainer;