import React, {useEffect, useState} from 'react';
import PageContainer from "../../components/PageContainer";
import ProjectPreview from "./components/ProjectPreview";
import { Props as PostPreviewProps } from "./components/ProjectPreview"

// interface ProjectPreview {
//     title: string;
//     description: string;
//     author: string;
//     imageUrl: string;
// }

const Projects: React.FC = () => {
    const [postList, setPostList] = useState<PostPreviewProps[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect( () => {
        const fetchPostList = async () => {
            try {
                const response = await fetch("api/projects/list");
                if ( !response.ok ) { throw new Error("Fetch response was not OK!") }
                const projectListData = await response.text();

                const projectList: PostPreviewProps[] = JSON.parse(projectListData)

                setPostList(projectList);
            } catch ( error ) {
                setError(`There was a problem! ${error}`)
            } finally {
                setIsLoading(false)
            }
        }

        if ( postList.length === 0 && !error && isLoading ) {
            fetchPostList()
        }
    }, [postList, error, isLoading])

    if ( isLoading ) {
        return(
            <PageContainer title="projects" loading >
                <p>Loading...</p>
            </PageContainer>
        )
    }

    if ( error ) {
        return(
            <PageContainer title="projects" error >
                <p>uh oh! {error}</p>
            </PageContainer>
        )
    }

    return(
        <PageContainer title="projects">
            { postList.map( ( previewData ) => (
                <ProjectPreview {...previewData} key={previewData.id} />
            ))}
        </PageContainer>
    );
};

export default Projects;

