import { useState } from "react";

const Slider = (props) => {
    const { copied, password, setCopied, length, changeInSlider, refreshPassword } = props

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(password);
    }
    const [rotate, setRotate] = useState(false)

    const handleRefresh = () => {
        setRotate(prev => !prev)
        refreshPassword()
        setTimeout(() => setRotate(prev => !prev), 400)
    }

    const change = (event) => {
        //! copy content to clipboard and change the copy button appearance 
        if (password.length > 0) {
            copyToClipBoard();
            setCopied(true);
        }
    }

    return (
        <>
            <div
                className="slideContainer">
                <input
                    id="myInput"
                    //! we also need to change the fill color length to make it move with the thumb
                    style={{ background: `linear-gradient(to right, #415771 0%, #415771 ${(length - 4) / 36 * 100}%, #c2daf1 ${(length - 4) / 36 * 100}%, #c2daf1 100%)` }}
                    type="range"
                    min="4"
                    max="40"
                    className="slider"
                    value={length}
                    onChange={changeInSlider} />
            </div>
            <div
                className="buttons">
                <button
                    onClick={handleRefresh}
                    disabled={password.length === 0}>
                    <i className={`fa-solid fa-arrows-rotate ${rotate ? 'rotate' : ''}`}></i>
                </button>
                <button
                    id="copy"
                    className={copied ? 'copied' : ''}
                    disabled={password.length === 0}
                    onClick={change}>
                    <i style={{ display: !copied ? 'inline-block' : 'none' }} className="fa-solid fa-copy"></i>
                    <i style={{ display: !copied ? 'none' : 'inline-block' }} className="fa-solid fa-circle-check"></i>
                </button>
                <h3
                    className="copiedLabel"
                    style={{ opacity: copied ? '100' : '0' }}
                >
                    Copied
                </h3>
            </div>
        </>
    )
}

export default Slider;