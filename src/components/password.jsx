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
            <h2 className="strength" style={{ color: color }}>{strength}</h2>
            {/*//! select text on click */}
            <input id="zebii" className="password" value={props.password} onClick={(event)=>{
                event.target.select();
            }} maxLength="40" onChange={(e) => {
                let newPass = e.target.value
                let passLength = newPass.length
                props.setPassword(newPass);
                props.setLength(passLength);
                const element = document.getElementById("myInput");
                let value = (passLength - element.min) / (element.max - element.min) * 100
                element.style.background = 'linear-gradient(to right, #415771 0%, #415771 ' + value + '%, #c2daf1 ' + value + '%, #c2daf1 100%)'
            }} />
        </div>
    )
}
export default Password;