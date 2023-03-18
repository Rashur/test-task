import React from 'react';
import AppRouter from "./components/app-router/AppRouter";
import "./App.styled"
import {StyledContainer} from "./App.styled";
import Header from "./components/header/Header";

const App = () => {
    return (
        <StyledContainer>
            <Header/>
            <AppRouter/>
        </StyledContainer>
    );
};

export default App;