import axios from "axios";
import {IUser} from "../types/types";

export default class UserService {

    static async getAll() {
        try {
            const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
            const users = response.data;
            return users;
        } catch (e) {
            console.log(e);
        }
    }

    static async getById(id: number) {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
            const user = response.data;
            return user;
        } catch (e) {
            console.log(e);
        }
    }

    static async getWithPagination(page: number, limit: number) {
        try {
            const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`)
            const users = response.data;
            return users;
        } catch (e) {
            console.log(e);
        }
    }
}