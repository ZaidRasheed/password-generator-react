import { useState, useEffect } from 'react'
import generatePassword from './generatePassword';

export default function usePassword() {

    //! the password
    const [password, setPassword] = useState('')

    //! its length 
    const [length, setLength] = useState(12);

    //! the length for the user generated password
    const [displayedLength, setDisplayedLength] = useState(12)

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

    const copyPassword = () => {
        setCopied(true)
    }

    const changeInLength = (event) => {
        //! whenever the slider value changes we have to change the value of manual input accordingly
        let num = event.target.value
        if (!num || num < 0) {
            setLength(0);
            setDisplayedLength(0)
        }
        else if (num > 40) {
            setLength(40)
            setDisplayedLength(40)
        }
        else {
            setLength(num);
            setDisplayedLength(num)
        }
    }

    useEffect(() => {
        //! change the copy button back to normal
        setCopied(false)

        setPassword(prev => {
            return generatePassword(displayedLength, passwordType, prev)
        })

    }, [length, refresh, passwordType.upperCase, passwordType.lowerCase, passwordType.symbols, passwordType.numbers])

    return {
        displayedLength,
        setDisplayedLength,
        passwordType,
        password,
        setPassword,
        refreshPassword,
        changeInLength,
        changeInPasswordType,
        copied,
        copyPassword
    }
}
