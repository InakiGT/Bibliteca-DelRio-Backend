class User {
    constructor( username, email, password, role ) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    getUsername() {
        return this.username;
    }
    
    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getRole() {
        return this.role;
    }
}

module.exports = User;