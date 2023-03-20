import React, {useState} from 'react';
import {StyledFormBox, StyledTab, StyledTabs} from "./LoginForm.styled";
import {Box, Tab, Tabs, Typography} from "@mui/material";
import SignUpContent from "../sign-up-content/SignUpContent";
const LoginForm = () => {
    const [value, setValue] = useState(1);

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <StyledFormBox>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        sx: {
                            borderColor: '2E1AAD',
                            color: '2E1AAD'
                    }
                }}
                >
                    <StyledTab label="Login" {...a11yProps(0)} />
                    <StyledTab label="Sign Up" {...a11yProps(1)} />
                </StyledTabs>
            </Box>
            {value === 0
            ?
                <h1>Login</h1>
            :
                <SignUpContent/>
            }
        </StyledFormBox>
    );
};

export default LoginForm;