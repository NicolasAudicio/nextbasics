import Link from 'next/link';
import Image from 'next/image';
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div>
        <Image className='rounded'
        src="/not-found.jpg"
        alt="sad cat"
        width={300}
        height={300} 
        />
      </div>
      <div>
        <h2 className='text-xl font-bold'>
          Error: Not Found
        </h2>
      </div>
      <div>
      <Link href="/"><button className='text-lg bg-gray-600 hover:bg-green-400 rounded p-2'>
        Return Home
        </button>
        </Link>
        </div>
    </div>
  )
}