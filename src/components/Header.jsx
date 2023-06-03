import { FcBrokenLink } from 'react-icons/fc'

function Header() {
    return (
        <header>
            <div className="mt-40">
                <div className="flex justify-center items-center gap-3">
                    <p className='font-caveat text-4xl'>Link Kısalt</p>
                    <FcBrokenLink size={40}/>
                </div>
            </div>
        </header>
    )
}

export default Header