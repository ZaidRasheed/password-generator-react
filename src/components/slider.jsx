const Slider = (props) => {
    const { displayedLength, changeInLength } = props

    return (
        <div
            className="slideContainer">
            <input
                //! we also need to change the fill color length to make it move with the thumb
                data-testid='slider'
                style={{ background: `linear-gradient(to right, #415771 0%, #415771 ${(displayedLength) / 40 * 100}%, #c2daf1 ${(displayedLength) / 40 * 100}%, #c2daf1 100%)` }}
                type="range"
                min="0"
                max="40"
                className="slider"
                value={displayedLength}
                onChange={changeInLength} />
        </div>
    )
}

export default Slider;