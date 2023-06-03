import Alert from '../Alert'
import useCopy from '../../hooks/useCopy'
import useTranslate from '../../hooks/useTranslate'
import { FaCopy } from 'react-icons/fa'

function SectionData({ linkData }) {

  const { isCopied, copyText, copied } = useCopy()
  const { getLinkName } = useTranslate()
  const mapData = { ...linkData, copied_link: copied }

  return (
    <>
      <Alert status={isCopied} style={{ backgroundColor: '#22c55e' }}>
        Link Kopyalandı!
      </Alert>
      {linkData &&
        <div className='flex justify-center'>
          <div className='grid gap-1 w-3/5 rounded-xl border border-zinc-300 shadow-md p-5'>
            {Object.keys(mapData).map((data, i) => (
              <div key={i} className='flex items-center text-zinc-600'>
                <p className='w-1/2 text-xs font-bold'>{getLinkName(data)}</p>
                <div className='w-1/2 flex items-center relative'>
                  <input type="text" readOnly
                    value={mapData[data]}
                    className={`${data === 'copied_link' ? 'text-red-500' : 'text-green-500'} text-sm w-full outline-none py-1 px-2.5 rounded-md`}
                  />
                  {data !== 'copied_link' &&
                    <FaCopy
                      className='absolute right-2.5 bg-green-100 hover:text-green-500 p-1 rounded-full transition-all duration-500 cursor-copy' size={22}
                      onClick={() => copyText(linkData[data])}
                    />
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default SectionData