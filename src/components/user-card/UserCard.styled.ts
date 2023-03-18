import styled from "styled-components";
import {Box, Card, Link, Typography} from "@mui/material";

export const StyledCard = styled(Card)`
  && {
    background-color: #E5E5E5;
    width: 798px;
    height: 125px;
    margin-bottom: 16px;
    box-shadow: none;
    border-radius: 8px;
  }
`

export const StyledTitleName = styled(Typography)`
  && {
    font-weight: 700;
    color: #231F20;
  }
`

export const StyledUserInfo = styled(Typography)`
  && {

    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: #231F20;
    display: flex;
    align-items: center;
  }
`

export const StyledProfileBox = styled(Box)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const StyledUserLink = styled(Link)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    height: 20px;
    width: 50px;
    font-size: 14px;
    font-weight: 700;
    color: #2E1AAD;
  }
`