export class User {
    id;
    onlineStatus;
    login;
    password;
    email;
    enabled;
    authorizationToken;

    constructor(id, onlineStatus, login, password, email, enabled, authorizationToken) {
        this.id = id;
        this.onlineStatus = onlineStatus;
        this.login = login;
        this.password = password;
        this.email = email;
        this.enabled = enabled;
        this.authorizationToken = authorizationToken;
    }
}