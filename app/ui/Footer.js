import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-gray-300 py-4 flex items-center justify-center mt-5'>
        <p className='font-semibold'>Designed by <Link className='no-underline' href={"https://www.linkedin.com/in/ayomide-ibidapo-1912541b4/"} target='_blank'>Ibidapo Ayomide</Link> </p>
    </div>
  )
}

export default Footer