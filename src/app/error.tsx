'use client'
 
import { useEffect } from 'react'
import  Image  from 'next/image'
import Link from 'next/link'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <Image className='rounded'
        src="/not-found.jpg"
        alt="sad cat"
        width={300}
        height={300} 
        />
      <h2>An error has ocurred</h2>
      <Link href="/">
      <button className='text-lg bg-gray-600 hover:bg-green-400 rounded p-2'>
        Home
      </button>
      </Link>
      
    </div>
  )
}