const Slider = (props) => {

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(props.password);
    }
    return (
        <div>
            <div className="slideContainer">
                <input id="myInput" type="range" min="0" max="40" className="slider" value={props.length} onChange={props.changeInSlider} />
            </div>
            <div className="buttons">
                <button onClick={() => {
                    props.setRefresh(!props.refresh);
                }}><i className="fa-solid fa-arrows-rotate"></i></button>
                <button onClick={copyToClipBoard}>
                    <i className="fa-solid fa-copy"></i>
                </button>
            </div>

        </div>
    )
}

export default Slider;