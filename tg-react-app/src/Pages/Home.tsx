import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {useForm} from "react-hook-form";

type LoginInputs = {
    username: string,
    password: string,
    rememberMe: boolean,
}

const Home: React.FC = () => {
    const form = useForm<LoginInputs>({
        defaultValues: {
            username: "",
            password: "",
        }
    });
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: LoginInputs) => {
        console.log(data)
    }

    return(
        <div className="App h-fit pt-80 flex justify-center items-center flex-col w-80 mx-auto">
            <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography component="h1" variant="h4">Welcome to React</Typography>
                <TextField
                    label="username" variant="filled" className="w-full mt-4"
                    {...register("username", {
                        required: "please enter your username"
                    })}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />
                <TextField
                    label="password" type="password" variant="filled" className="w-full mt-4"
                    {...register("password", {
                        required: "please enter a password"
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <FormGroup className="w-full">
                    <FormControlLabel control={<Switch />} label="Remember me" />
                </FormGroup>
                <Button variant="contained" disableElevation className="normal-case w-full mt-4" type="submit">sign in</Button>
            </form>
            <div className="h-16" />
            <Typography variant="subtitle1">new user?</Typography>
            <Button variant="contained" disableElevation className="normal-case w-full mt-4">create account</Button>
        </div>
    )
}

export default Home;