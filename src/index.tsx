import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GlobalStyles, ThemeProvider} from "@mui/material";
import {theme} from "./theme";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyles
                    styles={(theme) => ({
                        body: {
                            margin: 0,
                            padding: 0,
                            boxSizing: "border-box",
                            fontFamily: "Manrope, san-serif"
                        }
                    })}
                />
                <App/>
            </BrowserRouter>
    </ThemeProvider>
);
