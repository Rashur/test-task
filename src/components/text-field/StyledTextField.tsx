import React from 'react';
import {Box, TextField} from "@mui/material";
import {MyTextField} from "./StyledTextField.styled";

interface TextFieldProps {
    type: string;
    label: string;
}

const StyledTextField = ({type, label}: TextFieldProps) => {
    return (
        <MyTextField
            id="outlined-multiline-flexible"
            label={label}
            type={type}
            sx={{
                "& label": {
                    color: "#999999"
                },
                "& label.Mui-focused": {
                    display: "none",

                },
                "& label.MuiFormLabel-filled": {
                    display: "none"
                }
            }}
            InputLabelProps={{
                shrink: false,
                sx: {
                    fontWeight: 800,
                    fontSize: 16,
                },
            }}
            InputProps={{
                sx: {
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: 22
                }
            }}
        >
        </MyTextField>
    );
};

export default StyledTextField;