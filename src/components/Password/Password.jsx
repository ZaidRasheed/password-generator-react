import { useEffect, useState } from "react";
import passwordTester from "./testPasswordStrength";

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
            <h2 className="strength" data-testid='strength' style={{ color: password.length > 3 ? color : '#112D4E' }}>
                {password.length > 3 ? strength : 'No password'}
            </h2>
            <input
                data-testid='password'
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