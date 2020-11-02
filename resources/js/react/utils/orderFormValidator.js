
export const orderFormValidator = options => {
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
    if (options.address.length <= 10) {
        return {
            field: "The Address",
            message: "must be greater, than 10 symbol"
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
