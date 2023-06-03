import { FaSpinner } from 'react-icons/fa'

function Loading() {

    return (
        <div className="fixed inset-0 bg-black/30 z-50">
            <p className="h-screen flex justify-center items-center">
                <FaSpinner className='animate-spin' size={30}/>
            </p>
        </div>
    )
}

export default Loading