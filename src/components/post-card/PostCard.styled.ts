import {Box, Card, CardContent, Link, Typography} from "@mui/material";
import styled from "styled-components";
import propsToClassKey from "@mui/system/propsToClassKey";

export const StyledCard = styled(Card)`
  && {
    background-color: #E5E5E5;
    margin-bottom: 16px;
    box-shadow: none;
    border-radius: 8px;
  }
`

export const StyledCardContent = styled(CardContent)`
  && {
    height: 130px;
  }
`

export const StyledPostContent = styled(Box)`
  && {
  }
`
export const StyledTitleTypography = styled(Typography)`
  && {
    font-weight: 700;
    color: #231F20;
    width: 650px;
  }
`

export const StyledUserTypography = styled(Typography)`
  && {
    margin-top: 4px;
    font-size: 12px;
    color: #666666;
  }
`

export const StyledUserNameLink = styled(Link)`
  && {
    text-decoration: none;
    color: #2E1AAD;
  }
`

export const StyledBodyTypography = styled(Typography)`
  && {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
    color: #231F20;
  }
`

export const StyledPostLinkBox = styled(Box)`
  && {
   
  }
`

export const StyledPostLink = styled(Link)`
  && {
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: #2E1AAD;
  }
`
