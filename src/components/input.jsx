const Input = (props) => {
    const { passwordType, changeInPasswordType, displayedLength, changeInLength } = props

    const options = []
    for (const type in passwordType) {
        const name = `${type}`.replace(/([A-Z])/g, ' $1')
        options.push(
            <label key={type} className="form-control">
                <input
                    defaultChecked={passwordType[type]}
                    type="checkbox"
                    name="password type"
                    value={type}
                    onChange={changeInPasswordType} />
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
        )
    }

    return (
        <div className="inputContainer">
            <div className="first">
                <h1>Length: </h1>
                <input
                    data-testid='length'
                    className='manualInput'
                    type="number"
                    min="0"
                    max="40"
                    value={displayedLength}
                    onChange={changeInLength}
                />
            </div>
            <div className="second">
                {options}
            </div>
        </div>
    )
}
export default Input;