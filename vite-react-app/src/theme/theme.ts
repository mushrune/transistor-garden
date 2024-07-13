import { ThemeOptions } from "@mui/material";

export const MUIThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#00c853',
        },
        error: {
            main: '#ff1744',
        },
        success: {
            main: '#00c853',
        },
        background: {
            paper: '#1a1820',
            default: '#000000',
        },
    },
    typography: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 500,
        fontWeightMedium: 700,
        fontWeightBold: 1000,
        h1: {
            fontFamily: 'Playfair Display',
        },
        h2: {
            fontFamily: 'Poppins',
        },
        h3: {
            fontFamily: 'Playfair Display',
        },
        h4: {
            fontFamily: 'Poppins',
            fontWeight: 1000,
            lineHeight: 1.43,
        },
        h5: {
            fontFamily: 'Poppins',
            fontWeight: 800,
        },
        body2: {
            fontWeight: 300,
        },
        button: {
            fontWeight: 1000,
            lineHeight: 2.00,
            fontSize: '24px',
        },
    },
};

export default MUIThemeOptions;