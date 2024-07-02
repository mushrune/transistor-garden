import * as React from 'react';
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from '@mui/material/styles';

const TgButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    borderColor: 'white',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'italic',
    textTransform: 'lowercase',
    padding: '5px 30px',
    '&:hover': {
        color: theme.palette.primary.main
    }
}));

export default TgButton;