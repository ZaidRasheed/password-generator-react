export default function passwordTester(password) {
    let score = 0
    
    if (/[A-Z]/.test(password) || /[a-z]/.test(password))
        score++;

    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]/.test(password))
        score++;

    //! for numbers only password 
    if ((password.length>=10 && password.length<15) && !score)
        return 'average'

    //! Letters are harder to guess than numbers we check before testing for numbers if we have decent amount of letters then its strong
    if (password.length >= 10 && score)
        return 'strong'

    //! Any password with 15+ is considered strong regardless of it's content
    if (password.length >= 15)
        return 'strong'

    if (/\d/.test(password))
        score++;

    if ((score === 3 && password.length >= 8) || (score === 2 && password.length >= 11))
        return 'strong'
    else if ((score === 2 && (password.length <= 10 && password.length >= 7)) || (score === 3 && password.length === 7))
        return 'average'
    else
        return 'weak'

}