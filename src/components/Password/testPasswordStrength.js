export default function passwordTester(password) {
    let score = 0

    //! first check for duplicates and see how often they occur relative to the size of the string
    const stringArray = password.split('')
    const stringSet = new Set(stringArray)

    //! if more than two duplicates and length <=10 then it's weak
    if ((stringArray.length - stringSet.size > 2) && password.length <= 10)
        return 'weak'

    //! if more than 3 of the characters are duplicates and length <15 then it's average
    if ((stringArray.length - stringSet.size > 3) && password.length < 15)
        return 'average'

    //! if more than 40% duplicates and length is < 20 password is weak
    if ((((stringArray.length - stringSet.size) / stringArray.length) > .4) && stringArray.length < 20)
        return 'weak'

    if (/[A-Z]/.test(password) || /[a-z]/.test(password))
        score++;

    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]/.test(password))
        score++;

    //! for numbers only password 
    if ((password.length >= 10 && password.length < 15) && !score)
        return 'average'

    //! Letters are harder to guess than numbers we check before testing for numbers if we have decent amount of letters then its strong
    if (password.length >= 12 && score === 1)
        return 'strong'

    if ((password.length < 12 && password.length >= 8) && score === 1)
        return 'average'

    //! Any password with 15+ is considered strong regardless of it's content
    if (password.length >= 15)
        return 'strong'

    if (/\d/.test(password))
        score++;

    if ((score === 3 && password.length >= 8) || (score === 2 && password.length >= 11))
        return 'strong'

    if ((score === 2 && (password.length >= 7 && password.length <= 10)) || (score === 3 && password.length === 7))
        return 'average'

    return 'weak'

}