import Head from 'next/head';
import { useState } from 'react';
import { jsPDF } from "jspdf";
import Link from 'next/link';


const Generate_w = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const doc = new jsPDF('p','in','letter');

const callGenerateEndpoint = async () => {
  setIsGenerating(true);

  // console.log("Calling OpenAI...")
  const response = await fetch('/api/generate_w', {
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


  const lines = doc.splitTextToSize(output.text, 7.5)

  doc.text(0.5, 0.5, lines)
  doc.save('Test.pdf')


//   doc.text(`Student: Mike \nGrade: First to second\n` + `${output.text}`, 15, 15);
//   doc.save("writing.pdf");





}



  return (
    <div className="container mx-auto flex m-8 place-content-center">

      
      <Head>
        <title>Aibacus - Create personalized homework assignments</title>
      </Head>

      
      <div>
        <div className="header">

        <Link 
            href="/"
            className='bg-blue-500 hover:bg-blue-700 text-sm text-white font-semibold ml-4 p-2 rounded-xl'
            >Home</Link>

<Link 
            href="/generate"
            className='bg-blue-500 hover:bg-blue-700 text-sm text-white font-semibold ml-4 p-2 rounded-xl'
            >Writing</Link>

<Link 
            href="/"
            className='bg-blue-500 hover:bg-blue-700 text-sm text-white font-semibold ml-4 p-2 rounded-xl'
            >Profile</Link>

          <div className="text-3xl mt-6">
            <h1> Writing assignments generator </h1>
           
          </div>

          <div className="text-l mt-6">
            <p>Select what you want assigment to be</p>
            <p><input type="checkbox" id="add" name="add" value="Science" /> Science</p>
            <p><input type="checkbox" id="subt" name="subt" value="Animals" /> Animals</p>
            <p><input type="checkbox" id="mult" name="mult" value="Random" /> Random</p>
           <br />

            <label htmlFor="s1">Select student level</label><p>
                <select id="s1" size="1" className='m-2'>
                <option>Third to fourth grade</option>
                <option>Fifth to sixth grade</option>
                </select>
                </p>
          </div>
        </div>
        {/* <div>
          <textarea
              className="m-6 border-2 border-gray-300 rounded-xl" 
              placeholder="for example: Grandma, 99 years " 
              value={userInput}
              onChange={onUserChangedText}
              rows="4" cols="50"
              />
        </div> */}

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




 


          {/* <a >
            <div className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl">
          <p>Generate</p>
            </div>
          </a> */}
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
  );
};

export default Generate_w;
