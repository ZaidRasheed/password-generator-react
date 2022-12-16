import { useEffect, useState } from "react";

const Password = (props) => {

    const { password, length } = props

    const [color, setColor] = useState("")

    const [strength, setStrength] = useState("Average")

    //! change strength of password and color according to its length 

    useEffect(() => {
        if (length < 8) {
            setColor("#EB1D36");
            setStrength("Weak");
        }
        else if (length < 14) {
            setColor("#E6B325");
            setStrength("Average");
        }
        else {
            setColor("#2B7A0B");
            setStrength("Strong");
        }
    }, [length])

    return (
        <>
            <h2 className="strength" style={{ color: password.length > 3 ? color : '#112D4E' }}>
                {password.length > 3 ? strength : 'No password'}
            </h2>
            <input
                id="input"
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