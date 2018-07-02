export class User {
    username: string;
    admin: boolean;
    password: string;

    constructor(obj?: any) {
        this.username = obj && obj.username || "";
        this.admin = obj && obj.admin || false;
        this.password = obj && obj.password || "";
    }
}