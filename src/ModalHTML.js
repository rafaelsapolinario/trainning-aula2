import { useState } from 'react';
import './ModalHTML.css';
/*import {
  Button
} from './components'*/

function ModalHTML(){

  const [id, setId] = useState(118);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const gerarNumAleatorio = () => {
    setId(randomNumberInRange(100,200));
  };



  return(
    <><div className='box'>
      <p className='titulo'>advice #{id}</p>
      <p>"It is easy to sit up and take notice, whats's difficult is getting up and taking action."</p>
      <p>__________ " __________</p>
      <div id='circle'></div>
    </div>
    <button onClick={gerarNumAleatorio}>Gerar número aleatório</button>
    </>

  )
}

export default ModalHTML;

/*import { useEffect } from 'react'

/*
import {
  Button,
  Card,
  Container,
  Image,
  Text
} from './components'

export default function App() {
  useEffect(() => {
    //random
    console.log('Hooks are very useful!')
  }, [])

  /*return (
    
  )
}*/
