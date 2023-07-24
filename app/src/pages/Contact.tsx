import React from 'react';
import PageContainer from "../components/PageContainer";
import { FiInstagram, FiMail, FiGithub } from "react-icons/fi";

const Contact: React.FC = () => {

    const handleInstagram = () => {
        window.open('https://www.instagram.com/transistor.garden/', '_blank', 'noreferrer')
    }
    const handleLink = (link: string) => {
        window.open(link, '_blank', 'noreferrer')
    }

    const handleEmail = () => {
        window.location.href = 'mailto:contact@transistor.garden?subject=Business Inquiry'
    }

    return(
        <PageContainer title="contact">
            <p className="italic my-2">
                For protection from web scrapers, a phone number is not present
                on this website. For any business inquiries
                please use the methods listed below. Thank you.
            </p>
            <button onClick={handleEmail} className="
                flex items-center my-2 p-2 rounded-xl
                hover:bg-slate-100
            ">
                <FiMail size={40}/>
                <h1 className="font-semibold text-3xl mx-3">contact@transistor.garden</h1>
            </button>
            <button onClick={() => handleLink('https://www.instagram.com/transistor.garden/')} className="
                flex items-center my-2 p-2 rounded-xl
                hover:bg-slate-100
            ">
                <FiInstagram size={40}/>
                <h1 className="font-semibold text-3xl mx-3">Instagram</h1>
            </button>
            <button onClick={() => handleLink('https://github.com/mushrune/transistor-garden')} className="
                flex items-center my-2 p-2 rounded-xl
                hover:bg-slate-100
            ">
                <FiGithub size={40}/>
                <h1 className="font-semibold text-3xl mx-3">GitHub</h1>
            </button>
        </PageContainer>
    );
};

export default Contact;