import React from "react";
import Post from "../pages/post/Post";
import User from "../pages/user/User";
import Users from "../pages/users/Users";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export enum RouteNames {
    HOME = '/',
    POST = '/post/:postId',
    USER = '/user/:userId',
    USERS = '/users',
    LOGIN = '/login',
}
export const routes: IRoute[] = [
    {path: RouteNames.HOME, element: <Home/>},
    {path: RouteNames.POST, element: <Post/>},
    {path: RouteNames.USER, element: <User/>},
    {path: RouteNames.USERS, element: <Users/>},
    {path: RouteNames.LOGIN, element: <Login/>}
]