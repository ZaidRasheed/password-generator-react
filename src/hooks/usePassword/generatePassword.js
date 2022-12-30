export default function generatePassword(length, passwordType, oldPassword = '') {
    if (!length)
        return ''

    let result = ''
    let repeat = false

    // make sure the password returned is always different than the previous one
    do {
        // generate a password according the options selected
        result = '';
        let characters = '';

        // all the password options
        const types = {
            lowerCase: 'abcdefghijklmnopqrstuvwxyz',
            upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            symbols: `${'`'}~!@#$%^&*()_-=+|\\}] {[,<>.?/:;"'`,
            numbers: '0123456789'
        }

        let currentLength = 0

        // to make sure theres at least one of each character type in the password we include one random and afterwards the remaining are random characters
        for (const property in types) {
            if (passwordType[property] && currentLength < length) {
                result += types[property].charAt(Math.floor(Math.random() * types[property].length))
                characters += types[property]
                currentLength++;
            }
        }

        for (let i = currentLength; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

    } while ((result === oldPassword || repeat) && oldPassword.length !== 0)

    return result;
}
