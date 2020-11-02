export const registerFormValidator = options => {
    if (!options.email.includes('@')) {
        return {
            field: "Email field",
            message: "is invalid"
        }
    }

    if (options.name.length <= 2) {
        return {
            field: "The Firstname",
            message: "must be greater, than 2 symbol"
        }
    }
    if (options.surname.length <= 2) {
        return {
            field: "The Surname",
            message: "must be greater, than 2 symbol"
        }
    }
    if (options.password.length <= 8) {
        return {
            field: "Password",
            message: "length must be greater than 8"
        }
    }
    if (!options.phoneNumber.includes('+')) {
        return {
            field: "The phone number",
            message: "must start with a 'plus' sign"
        }
    }
    if (options.phoneNumber.length <= 7) {
        return {
            field: "The phone number",
            message: "must be greater, than 7 symbol"
        }
    }
    return false
}

export const loginFormValidator = options => {
    if (!options.email.includes('@')) {
        return {
            field: "Email field",
            message: "is invalid"
        }
    }
    if (options.password.length <= 8) {
        return {
            field: "Password",
            message: "length must be greater than 8"
        }
    }
};
