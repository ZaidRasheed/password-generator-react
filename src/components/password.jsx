import { useEffect, useState } from "react";

function passwordTester(string) {
    let score = 0
    
    if (/[A-Z]/.test(string) || /[a-z]/.test(string))
        score++;

    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]/.test(string))
        score++;

    //! for numbers only password 
    if ((string.length>=10 && string.length<15) && !score)
        return 'average'

    //! Letters are harder to guess than numbers we check before testing for numbers if we have decent amount of letters then its strong
    if (string.length >= 10 && score)
        return 'strong'

    //! Any password with 15+ is considered strong regardless of it's content
    if (string.length >= 15)
        return 'strong'

    if (/\d/.test(string))
        score++;

    if ((score === 3 && string.length >= 8) || (score === 2 && string.length >= 11))
        return 'strong'
    else if ((score === 2 && (string.length <= 10 && string.length >= 7)) || (score === 3 && string.length === 7))
        return 'average'
    else
        return 'weak'

}

const Password = (props) => {

    const { password } = props

    const [color, setColor] = useState("")

    const [strength, setStrength] = useState("Average")

    //! change strength of password and color according to its length 

    useEffect(() => {

        const strength = passwordTester(password)

        switch (strength) {
            case 'strong':
                setColor("#2B7A0B");
                setStrength("Strong");
                break
            case 'average':
                setColor("#E6B325");
                setStrength("Average");
                break
            case 'weak':
                setColor("#EB1D36");
                setStrength("Weak");
                break
            default:
                setColor("#EB1D36");
                setStrength("Weak");
        }

    }, [password])

    return (
        <>
            <h2 className="strength" style={{ color: password.length > 3 ? color : '#112D4E' }}>
                {password.length > 3 ? strength : 'No password'}
            </h2>
            <input
                className="password"
                value={password}
                //! to select text on click 
                onClick={(event) => {
                    event.target.select();
                }}
                maxLength="40"
                readOnly
            />
        </>
    )
}
export default Password;