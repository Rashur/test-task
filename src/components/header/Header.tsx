import React from 'react';
import {
    StyledAppBar,
    StyledButtonBox, StyledHeaderBox,
    StyledHeaderContainer,
    StyledHeaderLink, StyledLinkBox,
    StyledLogoTypography
} from "./Header.styled";
import {Box, display} from "@mui/system";
import OutlinedButton from "../buttons/OutlinedButton";
import ContainedButton from "../buttons/ContainedButton";
import {Link} from "@mui/material";
import {RouteNames} from "../../router";

const pages = [{name: "Home", path: "/"}, {name: "Users", path: "/users"}]

const Header = () => {
    return (
        <StyledAppBar>
            <StyledHeaderContainer>
                <StyledLogoTypography>
                    LOGO
                </StyledLogoTypography>
                <StyledHeaderBox>
                    <Box sx={{ display: "flex" }}>
                        {pages.map((page) => (
                            <StyledLinkBox key={page.name}>
                                <StyledHeaderLink href={page.path} underline={"none"} key={page.name}>
                                    {page.name}
                                </StyledHeaderLink>
                            </StyledLinkBox>
                        ))}
                    </Box>
                    <StyledButtonBox>
                        <Link sx={{textDecoration: "none"}} href={RouteNames.LOGIN}>
                            <OutlinedButton height={40} width={100} title={"Login"}/>
                        </Link>
                        <Link sx={{textDecoration: "none"}} href={RouteNames.LOGIN}>
                            <ContainedButton height={40} width={100} title={"Sign up"}/>
                        </Link>
                    </StyledButtonBox>
                </StyledHeaderBox>
            </StyledHeaderContainer>
        </StyledAppBar>
    );
};

export default Header;