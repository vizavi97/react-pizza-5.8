export const inputValidator = event => {
    const wordPattern = /[^a-z/A-Z]$/
    switch (event.target.name) {
        case "name": {
            return event.target.value.trim().replace(wordPattern,'');
        }
        case "surname": {
            return event.target.value.trim().replace(wordPattern,'');
        }
        case "phoneNumber": {
            const pattern = /[^+\d]$/
            return event.target.value.replace(pattern, "")
        }
        case "password": {
            return event.target.value.trim()
        }
        case "email": {
            return event.target.value.trim()
        }
        default:
            return event.target.value;
    }
}
