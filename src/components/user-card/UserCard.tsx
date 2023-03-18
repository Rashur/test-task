import React, {useEffect} from 'react';
import {StyledCard, StyledProfileBox, StyledTitleName, StyledUserInfo, StyledUserLink} from "./UserCard.styled";
import {Box, CardContent} from "@mui/material";
import {IUser} from "../../types/types";
import {AccountCircleOutlined, EmailOutlined, LocalPhoneOutlined} from "@mui/icons-material";

const UserCard = ({id, username, name, email, phone}: IUser) => {

    useEffect(() => {
        console.log(username)
    }, [])

    return (
        <StyledCard>
            <CardContent>
                <StyledTitleName>{name}</StyledTitleName>
                <StyledUserInfo>
                    <AccountCircleOutlined sx={{marginRight: 0.5}} color={"primary"}/>{username}
                </StyledUserInfo>
                <StyledUserInfo>
                    <EmailOutlined sx={{marginRight: 0.5}} color={"primary"}/>{email}
                </StyledUserInfo>
                <StyledProfileBox>
                    <StyledUserInfo>
                        <LocalPhoneOutlined sx={{marginRight: 0.5}} color={"primary"}/>{phone}
                    </StyledUserInfo>
                    <StyledUserLink href={`/user/${id}`}>Profile</StyledUserLink>
                </StyledProfileBox>
            </CardContent>
        </StyledCard>
    );
};

export default UserCard;