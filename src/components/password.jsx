import { useEffect, useState } from "react";

const Password = (props) => {

    const [color, setColor] = useState("")

    const [strength, setStrength] = useState("Average")

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
            <h2 className="strength" style={{ color: color }}>{strength}</h2>
            <h3 className="password" >{props.password}</h3>
        </div>
    )
}
export default Password;