import { useState, useEffect } from 'react'
import generatePassword from './generatePassword/generatePassword';

export default function usePassword() {

    //! the password
    const [password, setPassword] = useState('')

    //! its length 
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

    const changeInLength = (event) => {
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

    useEffect(() => {
        //! change the copy button back to normal
        setCopied(false);
        setPassword(prev => {
            return generatePassword(length, passwordType, prev)
        })
    }, [length, refresh, passwordType.upperCase, passwordType.lowerCase, passwordType.symbols, passwordType.numbers])

    return {
        length,
        setLength,
        passwordType,
        password,
        refreshPassword,
        changeInLength,
        changeInPasswordType,
        copied,
        setCopied
    }
}
