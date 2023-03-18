import {IPost} from "../types/types";
import UserService from "./UserService";
import axios from "axios";

export default class PostService {
    static async getAll() {
        try {
            const response = await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
            const posts = response?.data;
            console.log(posts)
            return posts;
        } catch (e) {
            console.log(e);
        }
    }

    static async getWithPagination(page: number, limit: number) {
        try {
            const response = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
            const posts = response.data;
            for (let i = 0; i < posts.length; i++) {
                const user = await UserService.getById(posts[i].userId);
                if (user !== undefined) {
                    posts[i].userName = user.name;
                }
            }
            posts.forEach((post) => {
                UserService.getById(post.userId)
            })
            return posts;
        } catch (e) {
            console.log(e);
        }
    }

    static async getById(id: number) {
        try {
            const response = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const post = response.data;
            return post;
        } catch (e) {
            console.log(e);
        }
    }

    static async getByUserIdWithPagination(page: number, limit: number, userId: number) {
        try {
            const response = await axios.get<IPost[]>(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}&userId=${userId}`
            )
            const posts = response.data;
            console.log(posts)
            return posts
        } catch (e) {
            console.log(e);
        }
    }

    static async getAllUserPosts(userId: number) {
        try {
            const response = await axios.get<IPost[]>(
                `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
            )
            const posts = response.data;
            console.log(posts)
            return posts
        } catch (e) {
            console.log(e);
        }
    }
}