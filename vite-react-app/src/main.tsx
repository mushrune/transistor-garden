import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import './index.css';
import { MUIThemeOptions } from "./theme/mui_theme";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Routes} from "./routes";

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement!);

const themeOptions = MUIThemeOptions;
themeOptions.components = {
    MuiPopover: { defaultProps: { container: rootElement }},
    MuiPopper: { defaultProps: { container: rootElement }}
}
const theme = createTheme( themeOptions );

const router = createBrowserRouter( Routes )

root.render(
  <React.StrictMode>
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <RouterProvider router={router} />
          </ThemeProvider>
      </StyledEngineProvider>
  </React.StrictMode>,
);
