import styled from "styled-components";
import {AppBar, Container, Link, Typography} from "@mui/material";
import {Box, style} from "@mui/system";


export const StyledAppBar = styled(AppBar)`
  && {
    display: flex;
    background-color: #ffffff;
    box-shadow: none;
    border-bottom: 1px solid #EBEBEB;
    position: relative;
  }
`

export const StyledHeaderContainer = styled(Container)`
  && {
    height: 80px;
    display: flex;
    align-items: center;
  }`

export const StyledLogoTypography = styled(Typography)`
  && {
    color: #2E1AAD;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    margin-right: 59px;
  }`

export const StyledHeaderBox = styled(Box)`
  && {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`

export const StyledHeaderLink = styled(Link)`
  && {
    font-weight: 700;
    color: #999999;
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid rgba(255, 255, 255, .5);
    transition: .25s color, .25s border-bottom-color;
  }

  &&:hover {
    color: #2E1AAD;
    border-bottom: 2px #2E1AAD solid;
  }
`

export const StyledLinkBox = styled(Box)`
  && {
    margin-right: 32px;
    
  }`

export const StyledButtonBox = styled(Box)`
  && {
    display: flex;
    width: 214px;
    justify-content: space-between;
  }`