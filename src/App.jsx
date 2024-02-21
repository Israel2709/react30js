import {useEffect,useState} from 'react'
import { getAllNames, saveName } from './api/namesApi'
import "./App.css";


function App() {

  const [names, setNames] = useState([])
  const [newName,setNewName] = useState("")

  useEffect(()=> {
    console.log("usando efecto")
    const getNames = async () => {
      const allNames = await getAllNames()
      setNames(allNames)
    }
    getNames()

  },[])

  const inputHandler = (event) => {
    setNewName(event.target.value)
  }

  const saveNewName = async () => {
    const response = await saveName(newName)
    console.log( response)
    const allNames = await getAllNames()
    setNames(allNames)
  }

  return (
    <>
      <input type="text" onChange={inputHandler} value={newName}/>
      <button onClick={saveNewName}>Guardar nombre  </button>
      <ul>
        {names.map( ({key,name}) => <li key={key}>{name}</li>)}
      </ul>
    </>
  );
}

export default App;
