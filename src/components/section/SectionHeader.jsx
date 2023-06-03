import React from 'react'

function SectionHeader() {
  return (
    <div className='text-center text-xs'>
      <p>
        Uzun linklerinizi kısa link haline getirin, QR kodunu edinin.<br />Link kısaltma sitesi {import.meta.env.VITE_URL}
      </p>
    </div>
  )
}

export default SectionHeader