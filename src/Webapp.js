import React, { useState, useRef } from 'react';
import './webapp.css';
import Tesseract from 'tesseract.js';
import pdfjsLib from 'pdfjs-dist/build/pdf.min.js';
import { Configuration, OpenAIApi } from "openai";

// const apiKeyRef = process.env.REACT_APP_OPENAI_API_KEY



function WebApp() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const outputRef = useRef(null);
  const openaiRef = useRef(null)

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    if (!files) return;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = async function(e) {
        const img = new Image();
        img.onload = async function() {
          setIsLoading(true);
          try {
            const { data: { text } } = await Tesseract.recognize(img, 'eng');
            console.log(text);
            // append the recognized text to the output element for each image
            outputRef.current.value += `${text}`;
          } catch (error) {
            console.error(error);
          }
          setIsLoading(false);
        };
        if (file.type.includes('pdf')) {
          // handle PDF file
          const loadingTask = pdfjsLib.getDocument(e.target.result);
          loadingTask.promise.then(async function(pdf) {
            const maxPages = pdf.numPages;
            for (let j = 1; j <= maxPages; j++) {
              try {
                const page = await pdf.getPage(j);
                const scale = 1.5;
                const viewport = page.getViewport({ scale: scale });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                const renderContext = {
                  canvasContext: context,
                  viewport: viewport
                };
                await page.render(renderContext).promise;
                const imgSrc = canvas.toDataURL();
                img.src = imgSrc;
              } catch (error) {
                console.error(error);
              }
            }
          });
        } else {
          reader.readAsDataURL(file);
          const fileContent = await new Promise((resolve) => {
            reader.onload = (event) => resolve(event.target.result);
          });
          const imgSrc = fileContent;
          img.src = imgSrc;
          setImageUrl(imgSrc); // set image URL to display the uploaded image
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // const apiUrl = 'http://localhost:3001/api/summarize';
  

  const apikey =process.env.REACT_APP_API_KEY
  
  const summarizeText = async () => {
    const text = outputRef.current.value;
    const prompt = document.getElementById('prompt').value;
   const inText = "in this text"
    const configuration = new Configuration({
      apiKey: apikey,
    });
    const openai = new OpenAIApi(configuration);
    
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt} ${inText} ${text}  `,
        temperature: 0.8,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        best_of:3
      });
      // const result = await response.json();
      const summary = response.data.choices[0].text
      console.log(summary);
      openaiRef.current.value = summary;
    } catch (error) {
      console.error(error);
    }
  }    

console.log(openaiRef)
  
          return (
          <div className="WebApp">
          <header>
          <h1>Image & Text Summarizer </h1>
          </header>
          <div className="container">
          <div className="upload">
          <input type="file" accept="image/*,.pdf" onChange={handleImageUpload} multiple />
          <img src={imageUrl} alt="" style={{width:'330px'}} />
          {isLoading && <p>Loading...</p> } 
          </div>
          <div className="output">
          <textarea ref= {outputRef} placeholder="Recognized text will be displayed here"></textarea>
          <div className="summarize">
            {/* <label htmlFor="prompt">Enter a prompt to summarize the text:</label> */}
            <input type="text" id="prompt" placeholder='Enter a prompt' />
          <textarea ref={openaiRef} placeholder="AI text will appear here" disabled></textarea>


          
          </div>
          <button onClick={summarizeText} className= "summarizeButton">Summarize Text</button>
          </div>
          </div>
          </div>
          );
          }
          
          export default WebApp;
