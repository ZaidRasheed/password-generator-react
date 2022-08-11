const Input = (props) => {
    return (
        <div className="inputContainer">
            <h1>Length: </h1>
            <input className='manualInput' type="number" min="1" max="40" value={props.length} onChange={props.changeInSlider} />
        </div>
    )
}
export default Input;