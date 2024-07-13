import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import './index.css';
import { MUIThemeOptions } from "./theme/theme";
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
