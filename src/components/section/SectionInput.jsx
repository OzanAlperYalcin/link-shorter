import Alert from '../Alert'
import useFetch from '../../hooks/useFetch'
import { useState, useEffect } from 'react'
import Loading from '../Loading'

function SectionInput({ queryState, setLinkData, setQrImage }) {

    const [submitError, setSubmitError] = useState(false)
    const { query, setQuery } = queryState
    const url = import.meta.env.VITE_LINK_API
    const { fetchData, loading, error, setError } = useFetch()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSubmitError(false)
            setError(false)
        }, 2500)
        return () => {
            clearTimeout(timeout)
        }
    }, [submitError, error])

    const submitHandle = async (e) => {
        e.preventDefault()
        try {
            if (query.length <= 1) {
                throw new Error('Link Girmelisiniz!')
            } else {
                const data = await fetchData(query)
                if (data) {
                    setLinkData(data)
                    setQrImage(import.meta.env.VITE_QR_API+query)
                }
            }
        } catch (err) {
            setSubmitError(err)
        }
    }

    return (
        <>
            {loading && <Loading />}
            <Alert status={(submitError || error)} style={{backgroundColor: '#ef4444'}}>
                Link Girmelisiniz!
            </Alert>
            <form onSubmit={(e) => submitHandle(e)} className='flex flex-col items-center gap-2.5'>
                <input
                    className='h-10 w-3/5 outline-none rounded-xl shadow-lg px-3'
                    placeholder='Kısaltmak isteğiniz URL'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type='submit' className='btn-primary w-2/5' >
                    Linki Kısalt!
                </button>
            </form>
        </>
    )
}

export default SectionInput