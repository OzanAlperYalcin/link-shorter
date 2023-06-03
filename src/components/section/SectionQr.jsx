import React from 'react'

function SectionQr({ image }) {
    return (
        image &&
        <div className='flex justify-center items-center'>
        <div className='grid justify-center gap-1 rounded-xl border border-zinc-300 p-5'>
            <h1 className='text-xs text-center font-bold text-zinc-600'>QR Kodunuz</h1>
            <img src={image} />
        </div>
        </div>
    )
}

export default SectionQr