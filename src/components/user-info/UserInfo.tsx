import React from 'react';
import {
    StyledAboutUserTypography,
    StyledAvatarWithUsernameBox,
    StyledBoldAboutUserTypography,
    StyledContactInfoBox,
    StyledContactsUserBox,
    StyledMainInfoBox, StyledUserBoxContent,
    StyledUserPersonalDataBox, StyledUserPersonalDataBoxContent
} from "./UserInfo.styled";
import {IUser} from "../../types/types";
import SeparateLine from "../separate-line/SeparateLine";
import {Avatar} from "@mui/material";

const UserInfo = ({id, name, email, phone, username, website, address}: IUser) => {
    return (
        <StyledMainInfoBox>
            <StyledContactsUserBox>
                <StyledUserBoxContent>
                    <StyledBoldAboutUserTypography>Contacts</StyledBoldAboutUserTypography>
                    <SeparateLine/>
                    <StyledAvatarWithUsernameBox>
                        <Avatar sx={{ marginRight: 2, width: 64, height: 64} }/>
                        <StyledBoldAboutUserTypography>{username}</StyledBoldAboutUserTypography>
                    </StyledAvatarWithUsernameBox>
                    <StyledContactInfoBox>
                        <StyledAboutUserTypography>Email: {email}</StyledAboutUserTypography>
                        <StyledAboutUserTypography>Tel: {phone}</StyledAboutUserTypography>
                    </StyledContactInfoBox >
                </StyledUserBoxContent>
            </StyledContactsUserBox>
            <StyledUserPersonalDataBox>
                <StyledUserBoxContent>
                    <StyledBoldAboutUserTypography>About</StyledBoldAboutUserTypography>
                    <SeparateLine/>
                    <StyledUserPersonalDataBoxContent>
                        <StyledAboutUserTypography>Name: {name}</StyledAboutUserTypography>
                        <SeparateLine/>
                        <StyledAboutUserTypography>Website: {website}</StyledAboutUserTypography>
                        <SeparateLine/>
                        <StyledAboutUserTypography>City: {address.city}</StyledAboutUserTypography>
                        <SeparateLine/>
                        <StyledAboutUserTypography>Street: {address.street}</StyledAboutUserTypography>
                        <SeparateLine/>
                        <StyledAboutUserTypography>Suite: {address.suite}</StyledAboutUserTypography>
                        <SeparateLine/>
                        <StyledAboutUserTypography>Zipcode: {address.zipcode}</StyledAboutUserTypography>
                    </StyledUserPersonalDataBoxContent>
                </StyledUserBoxContent>
            </StyledUserPersonalDataBox>
        </StyledMainInfoBox>
    );
};

export default UserInfo;