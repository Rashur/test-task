import React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";
import {IPost} from "../../types/types";
import {
    StyledBodyTypography,
    StyledCard, StyledCardContent, StyledPostContent,
    StyledPostLink, StyledPostLinkBox,
    StyledUserNameLink,
    StyledUserTypography
} from "./PostCard.styled";
import {StyledTitleTypography} from "./PostCard.styled";

interface PostCardProps {
    post: IPost,
    width?: any;
    height?: any
}

const PostCard = ({ post, height, width }: PostCardProps) => {


    return (
        <StyledCard sx={{
            width: width,
            height: height
        }}>
            <StyledCardContent>
                <StyledPostContent>
                    <StyledTitleTypography noWrap variant="h6">{post.title}</StyledTitleTypography>
                    {post.userName !== undefined &&
                        <StyledUserTypography variant="h1">Posted by
                            <StyledUserNameLink href={`/user/${post.userId}`}> {post.userName}</StyledUserNameLink>
                        </StyledUserTypography>
                    }
                    <StyledBodyTypography>{post.body}</StyledBodyTypography>
                    <StyledPostLinkBox>
                        <StyledPostLink href={`/post/${post.id}`}>See more...</StyledPostLink>
                    </StyledPostLinkBox>
                </StyledPostContent>
            </StyledCardContent>
        </StyledCard>
    );
};

export default PostCard;