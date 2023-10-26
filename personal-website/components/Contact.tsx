import Link from 'next/link'
import React from 'react'

function Contact() {



  const buttons: {
  [key: number] : Button
  } = {
    1: {
      text: 'Let\'s Connect!',
      bg: 'bg-indigo-500',
      br: 'rounded-md'

    },
  }

  return (
    <div className='flex items-center gap-4'>
      {
        Object.values(buttons).map((btn, i) => (
          <button key={i} className={`${btn.bg ?? 'bg-red-500'} text-white p-3 font-bold ${btn.br ?? 'rounded-full'} transition-all duration-150 active:scale-90 active:bg-red-500`}>
          {
            btn.link ?
            <Link href={btn.link!}>{btn.text}</Link>
            :
            btn.text
          }
          </button>
        ))
      }
    </div>
  )
}

export default Contact