import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
          <div className="container mx-auto flex m-8 place-content-center">
          <div className='box m-4'>
            <h2 className="font-serif text-4xl font-semibold"> Welcome to Aibacus </h2>
          <Image
    className='rounded-xl'
    src="/main.png" // Route of the image file
    height={288} // Desired size with correct aspect ratio
    width={288} // Desired size with correct aspect ratio
    alt="A boy"
     />
          <p className='mt-6 font-serif text-l'>A place where you can:</p> 
          <ul className='font-serif text-l p-2 list-disc'>
            <li>help your child learn faster and more effectively</li>
            <li>instantly create assignments adapted to your child's unique learning style</li>
            <li>observe the pace and analyze the learning progress</li>
            <li>share your ideas with other parents</li>
          </ul>
          
          <Link 
            href="/generate"
            className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl'
            >Go do something</Link>
          </div>
          </div>
        </>
      );
  }