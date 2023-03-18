import React from "react";
import Post from "../pages/post/Post";
import User from "../pages/user/User";
import Users from "../pages/users/Users";
import Home from "../pages/home/Home";

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export enum RouteNames {
    HOME = '/',
    POST = '/post/:postId',
    USER = '/user/:userId',
    USERS = '/users'
}
export const routes: IRoute[] = [
    {path: RouteNames.HOME, element: <Home/>},
    {path: RouteNames.POST, element: <Post/>},
    {path: RouteNames.USER, element: <User/>},
    {path: RouteNames.USERS, element: <Users/>},
]