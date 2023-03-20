import React from 'react';
import {Container} from "@mui/material";
import LoginForm from "../../components/login-form/LoginForm";
import {StyledLoginPageContainer} from "./Login.styled";

const Login = () => {
    return (
        <StyledLoginPageContainer>
            <LoginForm/>
        </StyledLoginPageContainer>
    );
};

export default Login;