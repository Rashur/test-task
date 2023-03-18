import React, {FC, useEffect, useState} from 'react';
import {StyledCommentTitle, StyledPostContainer} from "./Post.styled";
import PostInfo from "../../components/post-info/PostInfo";
import {IComment, IPost} from "../../types/types";
import PostService from "../../api/PostService";
import {useParams} from "react-router-dom";
import UserService from "../../api/UserService";
import {Box} from "@mui/material";
import CommentService from "../../api/CommentService";
import PostComments from "../../components/post-comments/PostComments";
import SeparateLine from "../../components/separate-line/SeparateLine";

const Post: FC = () => {
    const [post, setPost] = useState<IPost | undefined>();
    const [comments, setComments] = useState<IComment[]>();
    const {postId} = useParams();

    async function fetchPostData() {
        try {
            const fetchedPost = await PostService.getById(Number(postId));
            if (fetchedPost !== undefined) {
                const fetchedUser = await UserService.getById(fetchedPost.userId);
                fetchedPost.userName = fetchedUser?.name;
                setPost(fetchedPost);
            }
            const fetchedComments = await CommentService.getAllByPostId(Number(postId));
            setComments(fetchedComments);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPostData()
    }, [])

    return (
        <StyledPostContainer>
            {post !== undefined &&
                <Box>
                    <PostInfo
                        userId={post.userId}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        userName={post.userName}/>
                    <StyledCommentTitle>Comments</StyledCommentTitle>
                    <SeparateLine/>
                    {comments?.map((comment) => (
                        <PostComments
                            key={comment.id}
                            postId={comment.postId}
                            id={comment.id}
                            name={comment.name}
                            email={comment.email}
                            body={comment.body}
                        />
                    ))}
                </Box>
            }
        </StyledPostContainer>
    );
};

export default Post;