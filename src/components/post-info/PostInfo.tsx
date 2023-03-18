import React from 'react';
import {
    StyledMainPostBox,
    StyledPostBody,
    StyledPostBox,
    StyledPostDetailsHeader,
    StyledTitleTypography,
    StyledUserInfoAvatarBox,
    StyledUserInfoBox,
    UserAvatar,
    UserNameTypography
} from "./PostInfo.styled";
import {IPost, IUser} from "../../types/types";
import "../../common/avatar.jpg";
import SeparateLine from "../separate-line/SeparateLine";

const PostInfo = ({id, title, userId, userName, body}: IPost) => {
    return (
        <StyledMainPostBox>
            <StyledPostBox>
                <StyledTitleTypography>{title}</StyledTitleTypography>
                <StyledPostDetailsHeader>Details</StyledPostDetailsHeader>
                <SeparateLine/>
                <StyledPostBody>{body}</StyledPostBody>
            </StyledPostBox>
            <StyledUserInfoBox>
                <StyledUserInfoAvatarBox>
                    <UserAvatar src={require('../../common/avatar.jpg')}></UserAvatar>
                </StyledUserInfoAvatarBox>
                <UserNameTypography>{userName}</UserNameTypography>
            </StyledUserInfoBox>
        </StyledMainPostBox>
    );
};

export default PostInfo;