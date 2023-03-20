import React, {useState} from 'react';
import {
    StyledCheckBoxContainer,
    StyledConfirmButtonBox,
    StyledConfirmInformation,
    StyledSignUpBox
} from "./SignUpContent.styled";
import {Checkbox, Link, TextField} from "@mui/material";
import InputLabel from "../input-label/InputLabel";
import StyledTextField from "../text-field/StyledTextField";
import ContainedButton from "../buttons/ContainedButton";

const SignUpContent = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [agree, setAgree] = useState<boolean>(false)

    return (
        <StyledSignUpBox>
            <form>
                <InputLabel title={"Email"}/>
                <StyledTextField type={"email"} label={"Email"}/>
                <InputLabel title={"Password"}/>
                <StyledTextField type={"password"} label={"Password"}/>
                <InputLabel title={"Confirm Password"}/>
                <StyledTextField type={"password"} label={"Confirm Password"}/>
                <StyledCheckBoxContainer>
                    <Checkbox sx={{padding: 0, color: '#C4C4C4', alignSelf: "flex-start", marginRight: 1}}/>
                    <StyledConfirmInformation>
                        By creating an account you agree
                        to the <Link sx={{color: '#231F20'}} href={"#"}>terms and conditions</Link> applicable
                        to our service and acknowledge
                        that your personal data will be used in accordance
                        with our privacy policy and you will receive emails
                        and communications about jobs, industry news,
                        new products and related topics.
                    </StyledConfirmInformation>
                </StyledCheckBoxContainer>
                <StyledConfirmButtonBox>
                    <ContainedButton height={52} width={400} title={"Sign Up"}/>
                </StyledConfirmButtonBox>
            </form>
        </StyledSignUpBox>
    );
};

export default SignUpContent;