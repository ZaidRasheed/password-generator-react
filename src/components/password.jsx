import { useEffect, useState } from "react";

const Password = (props) => {

    const [color, setColor] = useState("")

    const [strength, setStrength] = useState("Average")

    //! change strength of password and color according to its length 

    useEffect(() => {
        if (props.length < 8) {
            setColor("#EB1D36");
            setStrength("Weak");
        }
        else if (props.length < 14) {
            setColor("#E6B325");
            setStrength("Average");
        }
        else {
            setColor("#2B7A0B");
            setStrength("Strong");
        }
    }, [props.length])

    return (
        <>
            <h2
                className="strength"
                style={{ color: color }}>{strength}
            </h2>
            <input
                id="input"
                className="password"
                value={props.password}
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