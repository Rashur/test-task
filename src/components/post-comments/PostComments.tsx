import React, {useEffect, useState} from 'react';
import {
    StyledCommentAvatarBox, StyledCommentBodyTypography,
    StyledCommentBox, StyledCommentDataBox,
    StyledCommentUserEmailTypography,
    StyledPostCommentsBox
} from "./PostComments.styled";
import {Avatar} from "@mui/material";
import {IComment, IPost} from "../../types/types";
import CommentService from "../../api/CommentService";

const PostComments = ({id, postId, email, name, body}: IComment) => {

    return (
        <StyledPostCommentsBox>
                <StyledCommentBox>
                    <StyledCommentAvatarBox>
                        <Avatar/>
                    </StyledCommentAvatarBox>
                    <StyledCommentDataBox>
                        <StyledCommentUserEmailTypography>{email}</StyledCommentUserEmailTypography>
                        <StyledCommentBodyTypography>{body}</StyledCommentBodyTypography>
                    </StyledCommentDataBox>
                </StyledCommentBox>
        </StyledPostCommentsBox>
    );
};

export default PostComments;