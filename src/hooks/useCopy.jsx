import { useState, useEffect } from 'react'
function useCopy() {
    const [isCopied, setIsCopied] = useState(false)
    const [copied, setCopied] = useState('')
    useEffect(() => {
        let copy
        if (isCopied) {
            copy = setTimeout(() => {
                setIsCopied(false)
            }, 2500)
        }
        return () => {
            clearTimeout(copy)
        }
    }, [isCopied])

    const copyText = (text) => {
        setCopied(text)
        navigator.clipboard.writeText(text)
        setIsCopied(true)
    }

    return { isCopied, copied, copyText }
}

export default useCopy