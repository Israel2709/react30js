const BASE_URL = 'https://javascript30js-default-rtdb.firebaseio.com'

const getAllNames = async () => {
    const response = await fetch(`${BASE_URL}/names/.json`)
    const data = await response.json()
    console.log(data)
    const formattedData = Object.keys(data).map( key => ({key,name:data[key]}) )
    return formattedData
}

const saveName = async (newName) => {
    const response = await fetch(`${BASE_URL}/names/.json`,{
      method:"POST",
      body:JSON.stringify(newName)
    })
    const data = await response.json()
    return data
}

export {getAllNames,saveName}