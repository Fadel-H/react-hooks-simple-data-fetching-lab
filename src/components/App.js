import {useState, useEffect } from "react";

function App (){
    const [picture, setPicture] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then (resp =>  resp.json())
        .then (resp => setPicture(resp.message))
    }, [])

    if(!picture) return <p>Loading...</p>
    return (
        <img src={picture} alt="A Random Dog" />
    )
}

export default App