export class Yuser {
    login: string;
    password: string;
    token: string;
    admin: boolean;
    constructor(login: string, password: string, admin?: boolean) {
        this.login = login;
        this.password = password;
        this.admin = admin || false;
    }
} 