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
        <div>
            <h2
                className="strength"
                style={{ color: color }}>{strength}
            </h2>
            {/*//! select text on click */}
            <input
                id="zebii"
                className="password"
                value={props.password}
                onClick={(event) => {
                    event.target.select();
                }}
                maxLength="40"
                readOnly
            />
        </div>
    )
}
export default Password;