import React, {FC, useEffect, useState} from 'react';
import {Box, CircularProgress, Container, Pagination, Stack, Typography} from "@mui/material";
import {IPost, IUser} from "../../types/types";
import axios from "axios";
import PostCard from "../../components/post-card/PostCard";
import {StyledHomeContainer, StyledPostsContainer} from "./Home.styled";
import PostService from "../../api/PostService";


const Home: FC = () => {
    const [posts, setPosts] = useState<IPost[] | undefined>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(4);
    const [pageQuantity, setPageQuantity] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchPosts() {
        try {
            setLoading(true);
            const allPosts = await PostService.getAll();
            const countPosts = allPosts?.length;
            if (countPosts !== undefined) {
                const quantityPage = Math.ceil(countPosts / 4);
                setPageQuantity(quantityPage);
            }
            const postsForPage = await PostService.getWithPagination(page, limit);
                setPosts(postsForPage);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [page])

    return (
        <StyledHomeContainer>
            {loading
                ? <CircularProgress/>
                :
                <StyledPostsContainer>
                    {posts?.map((post) => (
                        <PostCard
                            key={post.id}
                            post={post}
                            width={700}
                            height={170}
                        />
                    ))}
                </StyledPostsContainer>
            }
            <Stack bottom={68} position={"absolute"} spacing={2}>
                <Pagination
                    count={pageQuantity}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    variant="outlined"
                    shape="rounded"/>
            </Stack>
        </StyledHomeContainer>
    );
};

export default Home;