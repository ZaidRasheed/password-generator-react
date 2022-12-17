import { useState, useMemo } from 'react'

export default function usePassword() {
    const [length, setLength] = useState(12);

    //! the refresh for a new password
    const [refresh, setRefresh] = useState(true);

    //! the copied label displayed when the user copies the password
    const [copied, setCopied] = useState(false);

    const [passwordType, setPasswordType] = useState({
        upperCase: true,
        lowerCase: true,
        numbers: true,
        symbols: true,
    })

    const changeInPasswordType = (event) => {
        //! when the content of the desired password changes we have to update the requirements
        let value = event.target.value;
        let check = passwordType[`${value}`];

        setPasswordType(() => {
            return {
                ...passwordType,
                [value]: !check
            }
        })
    }

    const refreshPassword = () => {
        setRefresh(prev => !prev)
    }

    const changeInSlider = (event) => {
        //! whenever the slider value changes we have to change the value of manual input accordingly
        let num = event.target.value
        if (!num || num < 4) {
            setLength(4);
        }
        else if (num > 40) {
            setLength(40)
        }
        else {
            setLength(num);
        }
    }

    //! the password
    const password = useMemo(() => {

        //! change the copy button back to normal
        setCopied(false);

        //! generate a password according the options selected
        let result = '';
        let characters = '';

        //! all the password options
        const types = {
            lowerCase: 'abcdefghijklmnopqrstuvwxyz',
            upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            symbols: '`~!@#$%^&*()_-=+|\\}] {[,<>.?/:;"'+"'",
            numbers: '0123456789'
        }

        let currentLength = 0

        //! to make sure theres at least one of each character type in the password we include one random and afterwards the remaining are random characters
        for (const prop in types) {
            if (passwordType[prop]) {
                result += types[prop].charAt(Math.floor(Math.random() * types[prop].length))
                characters += types[prop]
                currentLength++;
            }
        }


        for (let i = currentLength; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result;

        //! we need to generate a new password whenever the length or type changes or when the user wants a new one
    }, [length, refresh, passwordType.upperCase, passwordType.lowerCase, passwordType.symbols, passwordType.numbers])

    return {
        length,
        setLength,
        passwordType,
        password,
        refreshPassword,
        changeInSlider,
        changeInPasswordType,
        copied,
        setCopied
    }
}
