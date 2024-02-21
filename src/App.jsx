import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./Components/Card";


function App() {
  const [fullname, setFullname] = useState("Israel Salinas Martínez")
  const [abstract, setAbstract] = useState("Front-end Developer")
  const [picture, setPicture] = useState("https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/422316559_10162128550877994_1355457506344239244_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHn4Y8hG55T8GlWZDnzVIgZfzOkSx5rdLZ_M6RLHmt0tl1zAYf071Jv3KAEXXKjOmA&_nc_ohc=VzKseijcxYoAX8asokC&_nc_ht=scontent.fmex36-1.fna&oh=00_AfBChHGgHhLMgop0IvJlwviCIRwp2BkDZOMiGYpJkkhd0g&oe=65DAB2F3")

  const [usersData, setUsersData] = useState(null)

  const fullnameHandler = (event) => {
    setFullname(event.target.value)
  }

  const abstractHandler = (event) => {
    setAbstract(event.target.value)
  }

  const pictureHandler = (event) => {
    setPicture(event.target.value)
  }

  const saveUserHandler = async (event) => {
    event.preventDefault()
    const userObject = {fullname,picture,abstract}
    const response = await fetch('https://javascript30js-default-rtdb.firebaseio.com/users/.json',{
      method:"POST",
      body:JSON.stringify(userObject)
    })
  }

  useEffect(()=> {
    const getAllUsers = async() => {
      const response = await fetch('https://javascript30js-default-rtdb.firebaseio.com/users/.json')
      const data = await response.json()
      const formattedData = Object.keys(data).map( key => ({key,...data[key]}))
      console.log(formattedData)
      setUsersData(formattedData)
    }
    getAllUsers()
  },[])

  return (
    <>
    <div className="container w-7/8 mx-auto border rounded-lg border-gray-500 p-4 flex gap-4">
      <form action="" className="border border-blue-500 p-4 rounded-lg flex flex-col gap-4 bg-dark">
        <div className="flex flex-col">
          <label htmlFor="">Nombre</label>
          <input value={fullname} type="text" className="bg-white border border-gray-500 rounded-lg py-2 px-4" onChange={fullnameHandler}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Abstract</label>
          <input value={abstract} type="text" className="bg-white border border-gray-500 rounded-lg py-2 px-4" onChange={abstractHandler}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Foto</label>
          <input value={picture} type="text" className="bg-white border border-gray-500 rounded-lg py-2 px-4" onChange={pictureHandler}/>
        </div>
        <button onClick={saveUserHandler} className="bg-green-600 text-white border border-green-600 rounded-lg py-2 px-4">Guardar Usuario</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-500 flex-1 rounded-lg">
        {
          usersData && usersData.map(({fullname,abstract,picture,key}) => (
              <Card key={key} picture={picture} abstract={abstract} fullname={fullname}/>
            )
          )
        }
        
      </div>
    </div>
    </>
  );
}

export default App;
