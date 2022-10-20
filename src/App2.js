import cards from "./db"
import {useState} from 'react'
import {
    Container
  } from './components'

export default function App2(){
    const [char, setName] = useState(['Goku'])

    //if(!cards.length) return "No cards available"

    return(
<>
            <section>{char}</section>
            <button onClick={() => {setName('Renato')}}>Alterar estado</button>
            </>
    )
}