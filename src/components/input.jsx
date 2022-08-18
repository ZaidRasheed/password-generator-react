const Input = (props) => {
    return (
        <div className="inputContainer">
            <div className="first">
                <h1>Length: </h1>
                <input className='manualInput' type="number" min="1" max="40" value={props.length} onChange={props.changeInSlider} />
            </div>
            <div className="second">
                <label className="form-control">
                <input defaultChecked={props.upperCase} type="checkbox" name="password type" value="upperCase" onChange={props.changeInPasswordType} />
                    Upper Case
                </label>

                <label className="form-control">
                <input defaultChecked={props.lowerCase} type="checkbox" name="password type" value="lowerCase" onChange={props.changeInPasswordType} />
                Lower Case
                </label>

                <label className="form-control">
                <input defaultChecked={props.numbers} type="checkbox" name="password type" value="numbers" onChange={props.changeInPasswordType} />
                Numbers
                </label>

                <label className="form-control">
                <input defaultChecked={props.symbols} type="checkbox" name="password type" value="symbols" onChange={props.changeInPasswordType} />
                Symbols
                </label>                
            </div>
        </div>
    )
}
export default Input;