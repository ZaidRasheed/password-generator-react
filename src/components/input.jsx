const Input = (props) => {
    const { passwordType, changeInPasswordType, length, changeInLength } = props
    return (
        <div className="inputContainer">
            <div className="first">
                <h1>Length: </h1>
                <input
                    className='manualInput'
                    type="number"
                    min="4"
                    max="40"
                    value={length}
                    onChange={changeInLength}
                />
            </div>
            <div className="second">
                <label className="form-control">
                    <input
                        defaultChecked={passwordType.upperCase}
                        type="checkbox"
                        name="password type"
                        value="upperCase"
                        onChange={changeInPasswordType} />
                    Upper Case
                </label>

                <label className="form-control">
                    <input
                        defaultChecked={passwordType.lowerCase}
                        type="checkbox"
                        name="password type"
                        value="lowerCase"
                        onChange={changeInPasswordType} />
                    Lower Case
                </label>

                <label className="form-control">
                    <input
                        defaultChecked={passwordType.numbers}
                        type="checkbox"
                        name="password type"
                        value="numbers"
                        onChange={changeInPasswordType} />
                    Numbers
                </label>

                <label className="form-control">
                    <input
                        defaultChecked={passwordType.symbols}
                        type="checkbox"
                        name="password type"
                        value="symbols"
                        onChange={changeInPasswordType} />
                    Symbols
                </label>
            </div>
        </div>
    )
}
export default Input;