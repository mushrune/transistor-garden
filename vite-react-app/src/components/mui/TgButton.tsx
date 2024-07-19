import * as React from 'react';
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => {
    return ({
        color: theme.palette?.primary.main,
        borderColor: theme.palette?.primary.main,
        fontWeight: 'normal',
        fontStyle: 'italic',
        textTransform: 'lowercase',
        padding: '5px 30px',
        '&.MuiButton-contained': {
            color: 'black',
            backgroundColor: theme.palette?.primary.main,
            '&:hover': {
                color: '#ffffff',
                backgroundColor: theme.palette?.primary.dark
            }
        },
        '&.Mui-disabled': {
            color: theme.palette?.text.disabled,
            backgroundColor: theme.palette?.background?.paper
        }
    });
});

const TgButton: React.FC<ButtonProps> = ( props ) => (
    <StyledButton {...props}>
        <div className={`
                z-20 absolute top-0 right-0 w-full h-full rounded-[4px]
                backdrop-blur-sm 
                ${ props.variant === 'contained' ? ' backdrop-opacity-50 ' : ' backdrop-opacity-100 ' }
             `}
             style={{
                 pointerEvents: "none",
                 padding: '5px 30px',
             }}
        >
            {props.children}
        </div>
        {props.children}
    </StyledButton>
)

export default TgButton;