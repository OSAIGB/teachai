import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faSearch, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import "./landingpage2.css"
function Awesome(props){
  return (
    <div className="fontawesome">
      <div>{props.fontawesome}</div>
      <p>{props.text}</p>
    </div>
  );
}

function LandingPage2() {
  return (
      <div className='fontawesome2'>
        <h3>TeachAI is for you if you are;</h3>
        <Awesome 
          fontawesome={<FontAwesomeIcon icon={faNewspaper} size="4x" />}
          text="Preparing for an exam"
        />
        <Awesome 
          fontawesome={<FontAwesomeIcon icon={faSearch} size="4x" />}
          text="You are researching"
        />
        <Awesome 
          fontawesome={<FontAwesomeIcon icon={faFileAlt} size="4x" />}
          text="Or you are an examiner"
        />
      </div>
  );
}

export default LandingPage2;
