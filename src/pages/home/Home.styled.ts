import styled from "styled-components";
import {Container, Stack, Typography} from "@mui/material";

export const StyledHomeContainer = styled(Container)`
  && {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 23px;
  }
`

export const StyledPostsContainer = styled(Container)`
  && {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const StyledPaginationStack = styled(Stack)`
  && {
    margin-top: 21px;
  }
`