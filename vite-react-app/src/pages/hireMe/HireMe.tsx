import * as React from 'react';
import TgButton from "../../components/mui/TgButton";
import NewClientPolicy from './newClientPolicy.md?raw'
import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import MarkdownViewer from "../../components/MarkdownViewer";
import { useState } from "react";
import NewClientForm from "./NewClientForm";



const HireMe: React.FC = () => {

    const [ policyAccepted, setPolicyAccepted ] = useState<boolean>(false);
    const [ showForm, setShowForm ] = useState<boolean>(false);

    const handleShowForm = () => {
        if ( policyAccepted ) {
            setShowForm(true);
        }
    }

    const handlePolicyAcceptChange = ( event: any ) => {
        setPolicyAccepted( event.target.checked );
    }

    if ( showForm ) {
        return(
            <NewClientForm />
        );
    }

    return(
        <>
            <div className="px-4">
                <Typography
                    variant="h4"
                    className="w-full text-center text-[32px] sm:text-[63px] mb-4"
                >for your consideration</Typography>
                <MarkdownViewer documentBody={NewClientPolicy} />
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox />}
                        checked={policyAccepted}
                        className="w-fit mx-auto h-fit mb-4 italic font-bold"
                        onChange={handlePolicyAcceptChange}
                        label="I have read and understand the new client policy for Transistor Garden"
                    />
                    <TgButton
                        variant="contained"
                        disabled={!policyAccepted}
                        onClick={handleShowForm}
                    >continue</TgButton>
                </FormGroup>
            </div>
            {/*<div className="*/}
            {/*    fixed*/}
            {/*    top-0 right-0*/}
            {/*    w-screen h-screen*/}
            {/*    z-100 backdrop-invert*/}
            {/*    pointer-events-none*/}
            {/*" />*/}
        </>
    )
}

export default HireMe;