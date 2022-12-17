const Slider = (props) => {
    const { length, changeInSlider } = props
    return (
        <div
            className="slideContainer">
            <input
                //! we also need to change the fill color length to make it move with the thumb
                style={{ background: `linear-gradient(to right, #415771 0%, #415771 ${(length - 4) / 36 * 100}%, #c2daf1 ${(length - 4) / 36 * 100}%, #c2daf1 100%)` }}
                type="range"
                min="4"
                max="40"
                className="slider"
                value={length}
                onChange={changeInSlider} />
        </div>
    )
}

export default Slider;