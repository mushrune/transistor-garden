import { ThemeOptions } from "@mui/material";

export const MUIThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
            primary: {
            main: '#69af67',
        },
        secondary: {
            main: '#848FA5',
        },
        background: {
        default: '#000000',
                paper: '#1a1820',
        },
    },
    typography: {
        fontFamily: 'Poppins',
            fontSize: 13,
            fontWeightLight: 300,
            fontWeightRegular: 500,
            fontWeightMedium: 700,
            fontWeightBold: 1000,
            h1: {
            fontFamily: 'Playfair Display',
        },
        h2: {
            fontFamily: 'Playfair Display',
        },
        h5: {
            fontWeight: 800,
        },
        body2: {
            fontWeight: 300,
        },
        button: {
            fontWeight: 1000,
                lineHeight: 2.66,
                fontSize: '1rem',
        },
        h4: {
            fontWeight: 1000,
                lineHeight: 1.43,
        },
        h3: {
            fontFamily: 'Playfair Display',
        },
    },
};