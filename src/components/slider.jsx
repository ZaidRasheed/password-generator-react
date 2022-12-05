const Slider = (props) => {

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(props.password);
    }

    const change = (event) => {
        //! copy content to clipboard and change the copy button appearance 

        copyToClipBoard();
        event.currentTarget.firstChild.style.display = 'none';
        event.currentTarget.firstChild.nextSibling.style.display = 'inline-block';
        document.getElementById("copy").classList.add("copied");
        props.setCopiedLabelOpacity("100");
    }

    return (
        <>
            <div
                className="slideContainer">
                <input
                    id="myInput"
                    type="range"
                    min="0"
                    max="40"
                    className="slider"
                    value={props.length}
                    onChange={props.changeInSlider} />
            </div>
            <div
                className="buttons">
                <button
                    onClick={() => {
                        props.setRefresh(!props.refresh);
                    }}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>
                <button
                    id="copy"
                    onClick={change}>
                    <i className="fa-solid fa-copy"></i>
                    <i className="fa-solid fa-circle-check"></i>
                </button>
                <h3
                    className="copiedLabel"
                    style={{ opacity: props.copiedLabelOpacity }}
                    >
                    Copied
                </h3>
            </div>
        </>
    )
}

export default Slider;