import { useState } from 'react'

function useFetch() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = async (query) => {
        setLoading(true)
        try {
            const link = await fetch(import.meta.env.VITE_LINK_API + query).then(res => res.json())
            if (link.ok) {
                return link.result
            } else {
                throw new Error(result)
            }
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { fetchData, loading, error, setError }
}

export default useFetch