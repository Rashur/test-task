import React from 'react';
import {StyledInputLabel} from "./InputLabel.styled";

interface InputLabelProps {
    title: string;
}
const InputLabel = ({title}: InputLabelProps) => {

    return (
        <StyledInputLabel>
            {title}
        </StyledInputLabel>
    );
};

export default InputLabel;