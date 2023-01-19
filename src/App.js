import React from 'react';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import'./App.css'

const App = () => {
  const commands =[
    {
      command: 'reset',
      callback: ({resetTranscript})=>resetTranscript()
    },
    
      {
        command: 'open *',
      callback: (site) => {
        window.open('http://'+site)
    }
      }
  ]

  const {transcript,resetTranscript} = useSpeechRecognition({commands});

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null
  }

  return (
    
      
      <div className = 'main'>
      
      <div className='MAIN_MIDLE'>
        <button className='btn' onClick={SpeechRecognition.startListening({continuous:true, language: 'en-IN'})}>Start</button>
        <button className='btn' onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className='btn'  onClick={resetTranscript}>Reset</button>
        <p className='text' >{transcript}</p>   
      </div> 
      
      
      
      </div>
    
    
  );
};
export default App;