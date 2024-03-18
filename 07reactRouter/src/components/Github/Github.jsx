import React, {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/harshjoshi02')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
        
  return (
    <div className=' bg-gray-700 text-white text-center m-4 p-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="github profile pic" width={200} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/harshjoshi02')
    return response.json()
}