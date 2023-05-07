import React, { useRef } from 'react';
import './landingpage1.css';
import WebApp from './Webapp';




function Card(props) {
  return (
    <div className="card">
      <h2 className='title'>{props.title}</h2>
      <div className="description">
        <p>{props.description}</p>
        {props.description2 && <p>{props.description2}</p>}
        {props.description3 && <p>{props.description3}</p>}
      </div>
    </div>
  )
}




function App() {
  const webAppRef = useRef(null);

  const handleButtonClick = () => {
    const webAppElement = document.getElementById("webapp");
    if (webAppElement) {
      webAppElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <header>
        <div className="header-left">
          <div className='study'>
        <h1>Interact with <br /><span className='hardcopy'> Hardcopy Texts</span></h1><br />
        <p>Combining OCR and AI, TeachAI helps you <br />interact with  Hardcopy Note Books,  Textbooks <br />and reseach materials</p>
        </div>
        <button onClick={handleButtonClick} className="button-try">Try it now</button>
        </div>
        <div className="header-rigt">
        <img src="genius.svg" alt="Genius illustration by https://www.popsy.co" />
        <div class="text-container">
</div>
</div>
      </header>
      <div className='card-container'>
      <Card
        title="Get text explanations"
        description= " OcrAI can help you understand complex texts on textbooks and notebooks. Combining the power of GPT-3, the app can help you break down complex text from texxtbooks. 
        Texts that even a toddler can understand"
      />
      <Card
        title="Save time"
        description= "No need to spend hours researching or looking up definitions. 
        Our app makes studying easy and efficient."
        description2 = "As a teacher, you can scan your hardcopy textbook, and ask the AI to 
        provide multiple questions based on the texts"
        description3 = "Teachers can also get answers to each question just by entering a prompt to the AI"
      />
      <Card
        title="Accessible"
        description= "Our app is free to use and available to all students and teachers, even school administrators. 
        No sign-up required."
      />
      </div>
      <div id="webapp">
        <WebApp ref={webAppRef} />
        
      </div>
    </div>
  );
}

export default App;
