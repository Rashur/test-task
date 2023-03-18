import axios from "axios";
import {IComment} from "../types/types";

export default class CommentService {

    static async getAllByPostId(postId: number) {
        try {
            const response = await axios.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            const comments = response.data;
            console.log(comments)
            return comments;
        } catch (e) {
            console.log(e);
        }
    }
}