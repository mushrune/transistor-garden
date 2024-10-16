import * as React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import TgButton from "../../components/mui/TgButton.tsx";
import { useState } from "react";

interface IFormInput {
    name: string;
    representation: string;
    phone_number: string;
    email_address: string;
    project_description: string;
    budget: string;
}

const phoneRegex = new RegExp('(?:\\d{1}\\s)?\\(?(\\d{3})\\)?-?\\s?(\\d{3})-?\\s?(\\d{4})');
const emailRegex = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');

const NewClientForm:React.FC = () => {

    const [ isRepresentation, setIsRepresentation ] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors}
    } = useForm<IFormInput>();

    // // effects for managing phone & email form validation
    // const phoneNumberWatch = watch('phone_number');
    // const emailWatch = watch('email_address');
    // const contactIsTouched = () => getFieldState('email_address').isTouched || getFieldState('phone_number').isTouched
    // useEffect( () => { if ( contactIsTouched() ) trigger('phone_number') }, [ emailWatch, trigger ]);
    // useEffect( () => { if ( contactIsTouched() ) trigger('email_address') }, [ phoneNumberWatch, trigger ]);

    const handleRepresentationChange = ( event: any ) => setIsRepresentation( event.target.checked );

    const validateRepresentation = ( value: string ): true | string => !!value || !isRepresentation
        ? true
        : "please enter the name of the business you are representing"

    const validatePhoneNumber = ( value: string ): true | string => phoneRegex.test( value )
            ? true
            : "invalid phone number";

    const validateEmailAddress = ( value: string ): true | string => emailRegex.test( value )
        ? true
        : "invalid email address";

    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

    return(
        <form
            onSubmit={ handleSubmit(onSubmit) }
            className="max-w-3xl mx-auto mt-4"
        >
            <Typography component="h1" variant="h4" className="w-full text-center">new client form</Typography>
            {/* client info block */}
            <div className="my-8">
                <Typography variant="h5" className="w-full text-center italic mb-2 font-normal">about you</Typography>
                <TextField
                    label="name *"
                    variant="filled"
                    className="w-full"
                    {...register("name", {
                        required: "please enter your name"
                    })}
                    error={ !!errors.name }
                    helperText={ errors.name?.message }
                />
                <FormControlLabel
                    control={<Checkbox />}
                    checked={isRepresentation}
                    onChange={handleRepresentationChange}
                    className="mt-2 w-full"
                    label="I am submitting this form on behalf of a business I own or work for."
                />
                { isRepresentation &&
                    <TextField
                        label = "business name *"
                        variant="filled"
                        className="w-full mt-2"
                        {...register("representation", {
                            validate: validateRepresentation
                        })}
                        error={ !!errors.representation }
                        helperText={ errors.representation?.message }
                    />
                }
            </div>
            {/* contact info block*/}
            <div className="w-full my-8">
                <Typography variant="h5" className="w-full text-center italic mb-2 font-normal">contact info</Typography>
                <TextField
                    label = "phone number *"
                    variant="filled"
                    className="w-full mb-4"
                    {...register("phone_number", {
                        /* behold - a very stinky validation function for the exact behavior i want */
                        validate: validatePhoneNumber,
                    })}
                    error={ !!errors.phone_number }
                    helperText={ errors.phone_number?.message }
                />
                <TextField
                    label = "email address *"
                    variant="filled"
                    className="w-full"
                    {...register("email_address", {
                        /* flags if the email is invalid, produces an error if the field is empty and the phone number is invalid / empty as well */
                        validate: validateEmailAddress,
                    })}
                    error={ !!errors.email_address }
                    helperText={ errors.email_address?.message }
                />
                {/*{ ( errors.email_address || errors.phone_number ) && <Typography variant="subtitle1" color="error" className="mt-2">please enter a valid email address and / or phone number.</Typography> }*/}
            </div>
            {/*project info block*/}
            <div className="w-full my-8">
                <Typography variant="h5" className="w-full text-center italic mb-2 font-normal">your project</Typography>
                <TextField
                    label = "how can I serve you? *"
                    variant="filled"
                    className="w-full mb-4"
                    {...register("project_description", {
                        required: 'please describe your project or request - "I need help building a website for my floral delivery service."'
                    })}
                    error={ !!errors.project_description }
                    helperText={ errors.project_description?.message }
                />
                <TextField
                    label = "what is your budget? *"
                    variant="filled"
                    className="w-full mb-4"
                    {...register("budget", {
                        required: 'please describe your budget.'
                    })}
                    error={ !! errors.budget }
                    helperText={ errors.budget?.message }
                />
            </div>
            <TgButton variant="contained" type="submit" className="w-full" disabled={ !!errors.root }>submit</TgButton>
        </form>
    );
};

export default NewClientForm;