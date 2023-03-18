import React, {FC, useEffect, useState} from 'react';
import {StyledUsersContainer, StyledUsersPageContainer} from "./Users.styled";
import {IPost, IUser} from "../../types/types";
import UserService from "../../api/UserService";
import PostService from "../../api/PostService";
import {CircularProgress, Pagination, Stack} from "@mui/material";
import UserCard from "../../components/user-card/UserCard";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[] | undefined>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(5);
    const [pageQuantity, setPageQuantity] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchUsers() {
        try {
            setLoading(true);
            const allUsers = await UserService.getAll();
            const countUsers = allUsers?.length;
            if (countUsers !== undefined) {
                const quantityPage = Math.ceil(countUsers / 5);
                setPageQuantity(quantityPage);
            }
            const usersForPage = await UserService.getWithPagination(page, limit);
            setUsers(usersForPage);
            setLoading(false)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [page])

    return (
        <StyledUsersPageContainer>
            {loading
                ? <CircularProgress/>
                : <StyledUsersContainer>
                    {users?.map((user) => (
                        <UserCard
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            address={user.address}
                            phone={user.phone}
                            website={user.website}
                            key={user.id}
                        />
                    ))}
                </StyledUsersContainer>
            }
            <Stack bottom={68} position={"absolute"} spacing={2}>
                <Pagination
                    count={pageQuantity}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    variant="outlined"
                    shape="rounded"/>
            </Stack>
        </StyledUsersPageContainer>
    );
};

export default Users;