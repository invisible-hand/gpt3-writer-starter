import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
         
<div className="isolate bg-white">

  <div className="px-6 pt-6 lg:px-8">
    <div>
      <nav className="flex h-9 items-center justify-between" aria-label="Global">
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Aibacus</span>
            <img className="h-8" src="grid-outline.svg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          <a href="generate" className="font-semibold text-gray-900 hover:text-gray-900">Arithmetics</a>

          <a href="generate_m" className="font-semibold text-gray-900 hover:text-gray-900">Math</a>

          <a href="generate_w" className="font-semibold text-gray-900 hover:text-gray-900">Writing</a>

        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
          <a href="#" className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">Sign up</a>
        </div>
      </nav>
      <div role="dialog" aria-modal="true">
        <div focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div className="flex h-9 items-center justify-between">
  
           
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Product</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Features</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Marketplace</a>

                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Company</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    <div className="relative px-6">
      <div className="mx-auto max-w-3xl">
        <div>
          
          <div>
            <img src="main.png" className='mx-auto rounded-xl m-4 w-1/2'/>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
            Experience the power of screen-free education
              </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            We help K-12 studens to learn without screens. Instantly generate assignments and print them for self-study. Analyze and track student progress. Share your ideas with other parents.     
              
              </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <a href="/generate" className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                Demo
                <span className="text-indigo-200" aria-hidden="true"> &rarr;</span>
              </a>
             
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </main>
</div>




          
        </>
      );
  }