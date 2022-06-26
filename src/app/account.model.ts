export class AccountModel {
    email?: string;
    password?: string;
    confirmPassword?: string;
    entryUrl?: string;
    code?: string;
    inviteCode?: string;
    user?: User;
    constructor(){
        this.user = new User();
    }
}

class User {
    firstname?: string;
    lastname?: string;
    username?: string;
    phoneNumber?: string;
}