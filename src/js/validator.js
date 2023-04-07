export default class Validator {
    constructor(username) {
        this.username = username;
    }

    validateUsername() {
        return /^[a-zA-Z]+[a-zA-Z0-9-_]*$/.test(this.username) && !/\d{4}/.test(this.username) && !/[/d/-_]$/.test(this.username);
    }
}
