import styled from "styled-components";
import {Box, Tab, Tabs} from "@mui/material";

export const StyledFormBox = styled(Box)`
  && {
    margin-top: 78px;
    padding: 32px 48px 48px 48px;
    box-sizing: border-box;
    background-color: #F5F7FA;
    height: 684px;
    width: 496px;
    border-radius: 8px;
    
  }
`

export const StyledTabs = styled(Tabs)`
  && {
    display: flex;
    justify-content: space-between;
  }
`

export const StyledTab = styled(Tab)`
  && {
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    color: #999999;
    width: 50%;
  }
`