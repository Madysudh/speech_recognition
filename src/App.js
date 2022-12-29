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
    <div>
      
      
      <div className='MAIN_MIDLE'>
        <button className='start' onClick={SpeechRecognition.startListening({continuous:true, language: 'en-IN'})}>Start</button>
        <button className='start' onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className='start'  onClick={resetTranscript}>Reset</button>
      </div> 
      <div className='text'>
            
      <p >{transcript}</p>
      </div> 
      
    </div>
  );
};
export default App;