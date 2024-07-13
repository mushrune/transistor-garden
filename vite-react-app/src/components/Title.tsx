import * as React from 'react';

const Title: React.FC = () => (
    <span className="
        flex justify-around
        w-[98%] sm:w-full mt-0 sm:mt-1 mb-0 sm:mb-4 mx-auto
        font-serif font-thin italic
        text-[28px] sm:text-[63px]
    ">
        {'TRANSISTOR GARDEN'.split('').map( (char, index) => (
            <span key={index}>{char}</span>
        ))}
    </span>
);

export default Title;