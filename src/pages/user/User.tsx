import React, {FC, useEffect, useState} from 'react';
import {IPost, IUser} from "../../types/types";
import {useParams} from "react-router-dom";
import {StyledPostsTitleTypography, StyledUserContainer} from "./User.styled";
import UserInfo from "../../components/user-info/UserInfo";
import UserService from "../../api/UserService";
import SeparateLine from "../../components/separate-line/SeparateLine";
import UserPosts from "../../components/user-posts/UserPosts";
import {Box} from "@mui/material";

const User: FC = () => {
    const [user, setUser] = useState<IUser | undefined>();
    const {userId} = useParams()

    async function fetchUser() {
        try {
            const fetchedUser = await UserService.getById(Number(userId));
            if (fetchedUser !== undefined) {
                setUser(fetchedUser);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <StyledUserContainer>
            {user !== undefined &&
                <Box>
                    <UserInfo
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        address={user.address}
                        phone={user.phone}
                        website={user.website}
                    />
                    <StyledPostsTitleTypography>Posts</StyledPostsTitleTypography>
                    <SeparateLine/>
                    <UserPosts userId={user.id}/>
                </Box>
            }
        </StyledUserContainer>
    );
};

export default User;