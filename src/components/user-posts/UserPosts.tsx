import React, {useEffect, useRef, useState} from 'react';
import {StyledMainUserPostsBox} from "./UserPosts.styled";
import {IPost} from "../../types/types";
import PostService from "../../api/PostService";
import PostCard from "../post-card/PostCard";
import PageService from "../../service/PageService";
import {Box, CircularProgress} from "@mui/material";

interface UserPostProps {
    userId: number
}

const UserPosts = ({userId}: UserPostProps) => {
    const [userPosts, setUserPosts] = useState<IPost[] | undefined>();

    async function fetchUserPosts() {
        try {
            const allPost = await PostService.getAllUserPosts(userId)
            setUserPosts(allPost);
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        fetchUserPosts()
    }, [])


    return (
        <StyledMainUserPostsBox>
            {userPosts?.map((userPost) => (
                <PostCard
                    key={userPost.id}
                    post={userPost}
                    width={"100%"}
                    height={140}
                />
            ))}


        </StyledMainUserPostsBox>
    );
};

export default UserPosts;