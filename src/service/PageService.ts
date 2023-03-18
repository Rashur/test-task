export default class PageService {

    static getPageCount(count: number, limit: number) {
        return  Math.ceil(count / limit);
    }
}