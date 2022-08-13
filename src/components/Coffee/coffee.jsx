import { useState } from "react"

const Coffee = () => {
    const[getData, setData]= useState([])

    const getCoffee = () => {
        fetch('https://api.sampleapis.com/coffee/hot')
        .then( response => response.json()  )
        .then( responseData => setData(responseData) )
        .catch( err => console.error(err) )
    }

    getCoffee()

    return (
        <>
        <header>
            <h1>Coffee</h1>
        </header>
        
        <main>
        {getData.map( each => {
            return(
                <div>
                    <h2>{each.id} {each.title}</h2>
                    <img src={each.image} alt='coffee' />
                    <p>{each.description}</p>
                </div>
            )
        })}
        </main>
        </>
    )
}

export default Coffee