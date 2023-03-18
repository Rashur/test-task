import styled from "styled-components";
import {Box, Typography} from "@mui/material";

export const StyledMainPostBox = styled(Box)`
  && {
    display: flex;
  }
`

export const StyledPostBox = styled(Box)`
  && {
    width: 800px;
    height: 300px;
  }
`

export const StyledTitleTypography = styled(Typography)`
  && {
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
    color: #373F41;
    
  }
`

export const StyledPostDetailsHeader = styled(Typography)`
  && {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    color: #373F41;
  }
`

export const StyledPostBody = styled(Typography)`
  && {
    margin-top: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #18191F;
  }
`

export const StyledUserInfoBox = styled(Box)`
  && {
    width: 352px;
    display: flex;
    flex-direction: column;
  }
`

export const StyledUserInfoAvatarBox = styled(Box)`
  display: flex;
  justify-content: center;
`

export const UserAvatar = styled.img`
  border-radius: 8px;
  width: 158px;
  height: 158px;
`

export const UserNameTypography = styled(Typography)`
  && {
    font-size: 18px;
    font-weight: 700;
    color: #18191F;
    display: flex;
    justify-content: center;
  }
`