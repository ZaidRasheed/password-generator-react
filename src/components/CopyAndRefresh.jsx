import { useState, useEffect } from "react";

export default function CopyAndRefresh(props) {
    const { copied, password, setCopied, refreshPassword } = props

    const copyToClipBoard = () => {
        navigator.clipboard?.writeText(password);
    }

    const [refreshed, setRefreshed] = useState(0)

    const handleRefresh = () => {
        refreshPassword()
        setRefreshed(1)
    }

    useEffect(() => {
        if (refreshed) {
            const timOut = setTimeout(() => setRefreshed(2), 400)
            return () => {
                clearTimeout(timOut)
            };
        }
    }, [refreshed]);

    const handleCopy = () => {
        //! copy content to clipboard and change the copy button appearance 
        if (password.length > 0) {
            copyToClipBoard();
            setCopied(true);
        }
    }
    return (
        <div
            className="buttons">
            <button
                onClick={handleRefresh}
                disabled={password?.length === 0}
                aria-label='refresh password'>
                <i className={`fa-solid fa-arrows-rotate ${refreshed === 1 ? 'rotate' : ''}`}></i>
            </button>
            <button
                id="copy"
                className={copied ? 'copied' : ''}
                disabled={password?.length === 0}
                onClick={handleCopy}>
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
    )
}
