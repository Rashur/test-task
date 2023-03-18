import React from 'react';
import {StyledSeparateLine} from "./SeparateLine.styled";

const SeparateLine = (width: any) => {
    return (
        <StyledSeparateLine sx={{
            width: {width},
        }}
        />
    );
};

export default SeparateLine;