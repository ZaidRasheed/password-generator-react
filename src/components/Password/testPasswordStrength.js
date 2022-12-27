export default function passwordTester(password) {

    const length = password.length

    let score = {
        numbers: false,
        letters: false,
        symbols: false,
        total: 0
    }

    if (/[A-Z]/.test(password) || /[a-z]/.test(password)) {
        score.letters = true;
        score.total += 1;
    }
    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]/.test(password)) {
        score.symbols = true;
        score.total += 1;
    }

    if (/\d/.test(password)) {
        score.numbers = true;
        score.total += 1;
    }
    if (length <= 6)
        return 'weak'


    //! first check for duplicates and see how often they occur relative to the size of the string and its content
    const stringArray = password.split('')
    const stringSet = new Set(stringArray)
    const numberOfDuplicates = stringArray.length - stringSet.size
    const percentageOfDuplicates = numberOfDuplicates / stringArray.length

    //! for one char type without symbols
    if (score.total === 1 && !score.symbols) {
        //! more than two duplicates and length <10
        if (numberOfDuplicates > 2 && length < 10)
            return 'weak'

        //! two duplicates and length <10 
        if (numberOfDuplicates === 2 && length < 10)
            return 'average'
    }

    //! for letters and numbers only
    if (score.total === 2 && !score.symbols) {
        //! if 3 the characters are duplicates and length <= 15
        if (numberOfDuplicates === 3 && length <= 15)
            return 'average'

        //! if more than 3 the characters are duplicates and length <= 15
        if (numberOfDuplicates > 3 && length <= 15)
            return 'weak'
    }

    if ((score.total === 1 && score.numbers) && (percentageOfDuplicates <= 0.35 && length >= 15))
        return 'strong'

    //! if duplicates >= 4 and length is <= 20 
    if (numberOfDuplicates >= 4 && stringArray.length <= 20) {
        //! if exactly 4 duplicates and not all three char types then average
        if (numberOfDuplicates === 4 && score.total !== 3)
            return 'average'

        //! if more than 4 duplicates and not all three char types then weak
        if (numberOfDuplicates >= 4 && score.total !== 3)
            return 'weak'

        //! if more than 6 duplicates and all three char types then weak
        if (numberOfDuplicates > 7 && score.total === 3)
            return 'weak'

        //! if 6 duplicates and all three char types then average
        if (numberOfDuplicates === 6 && score.total === 3)
            return 'average'
    }

    //! if percentage of duplicates is >=40% and length is >=20
    if (percentageOfDuplicates >= .4 && length >= 20)
        return 'weak'

    //! Letters are harder to guess than numbers if we have decent amount of letters then its strong
    if (length >= 12 && (score.total === 1 && score.letters))
        return 'strong'
    //! for lower length
    if ((length >= 8 && length < 12) && (score.total === 1 && score.letters))
        return 'average'

    //! Any password with 15+ is considered strong regardless of it's content if it passes the duplicates and not only numbers 
    if (length >= 15 && (score.total >= 2 || !score.numbers))
        return 'strong'

    if (length >= 8 && score.symbols)
        return 'strong'

    if ((score.total === 3 && length >= 8) || ((score.total === 2 && !score.symbols) && length >= 11))
        return 'strong'

    if ((score.total === 2 && (length >= 7 && length <= 10)) || (score.total === 3 && length === 7))
        return 'average'

    return 'weak'

}