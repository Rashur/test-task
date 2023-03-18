import React from 'react';
import {Button} from "@mui/material";

interface IButtonProps {
    height: number;
    width: number;
    title: string;
}

const ContainedButton = ({height, width, title}: IButtonProps) => {
    return (
        <Button
            variant="contained"
            sx={{
                height: height,
                width: width,
                borderRadius: 2,
                backgroundColor: "#2E1AAD",
                boxShadow: 0,
                fontWeight: 700,
                fontSize: 14,
                lineHeight: 20
            }}
        >
            {title}
        </Button>
    );
};

export default ContainedButton;