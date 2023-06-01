import React, { useEffect, useState } from 'react';
import PageContainer from '../components/PageContainer';
import MarkdownContainer from "../components/MarkdownContainer";

const About: React.FC = () => {
    const [about, setAbout] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect( () => {
        const fetchAbout = async () => {
            try {
                const response = await fetch("api/about");
                if ( !response.ok ) { throw new Error("Fetch response was not OK!") }
                const about = await response.text();

                setAbout(about);
            } catch ( error ) {
                setError(`There was a problem! ${error}`)
            } finally {
                setIsLoading(false)
            }
        }

        if ( !about && !error ) {
            fetchAbout()
        }
    }, [about, error, isLoading])

    if ( isLoading ) {
        return(
            <PageContainer title="about" loading >
                <p>Loading...</p>
            </PageContainer>
        )
    }

    if ( error ) {
        return(
            <PageContainer title="about" error >
                <p>uh oh! {error}</p>
            </PageContainer>
        )
    }

    return(
        <PageContainer title="about">
            <MarkdownContainer markdown={about} />
        </PageContainer>
    );
};

export default About;