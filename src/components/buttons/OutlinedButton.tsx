import React from 'react';
import {Button} from "@mui/material";
import {borderRadius} from "@mui/system";

interface IButtonProps {
    height: number;
    width: number;
    title: string;
}

const OutlinedButton = ({height, width, title}: IButtonProps) => {
    return (
        <Button
            variant="outlined"
            sx={{
                height: height,
                width: width,
                borderRadius: 2,
                borderColor: "#2E1AAD",
                fontSize: 14,
                fontWeight: 700,
                color: "#2E1AAD",
                lineHeight: 20
            }}
        >
            {title}
        </Button>
    );
};

export default OutlinedButton;