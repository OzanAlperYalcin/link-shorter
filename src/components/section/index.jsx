import SectionHeader from './SectionHeader'
import SectionInput from './SectionInput'
import SectionData from './SectionData'
import SectionQr from './SectionQr'
import { useState } from 'react'

function Section() {

    const [query, setQuery] = useState('')
    const [linkData, setLinkData] = useState('')
    const [qrImage, setQrImage] = useState()

    return (
        <div className='grid gap-5'>
            <SectionHeader />
            <SectionInput
                queryState={{ query, setQuery }}
                setLinkData={setLinkData}
                setQrImage={setQrImage}
            />
            <SectionData
                linkData={linkData}
            />
            <SectionQr
                image={qrImage}
            />
        </div>
    )
}

export default Section