import Head from 'next/head';
import { useState } from 'react';
import { jsPDF } from "jspdf";
import Link from 'next/link';


const Generate_m = () => {
    const [userInput, setUserInput] = useState('');
    const [apiOutput, setApiOutput] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
  
    const doc = new jsPDF();
  
  
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    const response = await fetch('/api/generate_m', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
  
    const data = await response.json();
    const { output } = data;
   console.log("OpenAI replied...", output.text)
  
    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  
  
    const lines = doc.splitTextToSize(output.text, 150)

    doc.text(10, 10, lines)
    doc.save('math.pdf')
   
  }
 
  
    return (
  
      <div className="isolate bg-white">
  
    <div className="px-6 pt-6 lg:px-8">
      <div>
        <nav className="flex h-9 items-center justify-between" aria-label="Global">
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="/" className="-m-1.5 p-1.5">
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
        
      </div>
    </div>
    <main>
      <div className="relative px-6">
        <div className="mx-auto max-w-3xl pt-16">
          <div>
            
          <div>
          <div className="header">
            <div className="text-2xl font-semibold">
              <h1> Math assignment generator </h1>
            </div>
  

            <div className="text-l mt-6">
             
              <label htmlFor="s1">Select student level</label>
  
              <p>
                  <select id="s1" size="1" className='rounded-md p-2 mt-2 bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <option>Third to fourth grade</option>
                  <option>Fifth to sixth grade</option>
                  </select>
                  </p>
            </div>
          </div>
  
          <div className="prompt-buttons">
  
          <div>
        { isGenerating ? (
          <p>Please wait...</p>
        ) : (
          <button 
          className={isGenerating ? 'invisible': 'm-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl'}
          onClick={callGenerateEndpoint}>
          Generate
        </button>
        )}
    
      </div>
  
          </div>
  
          {apiOutput && (
    <div className="text-l m-4">
      <div>
        <div className="text-2xl font-medium m-2">
          <h3>Output</h3>
        </div>
      </div>
      <div className="text-m">
        {apiOutput}
      </div>
           
  
  
    </div>
  )}
  
 
  
        </div>    
            
          </div>
        </div>
      </div>
    </main>
  
  
  
      </div>
    );
  };
export default Generate_m;