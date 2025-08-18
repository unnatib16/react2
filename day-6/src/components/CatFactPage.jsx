import React, {useState} from "react";
import axios from 'axios';

function CarFactPage(){
    const[catFact, setCatFact]=useState('');
    const fetchCatFact = async() => {
        try{
            const response = await axios.get('https://catfact.ninja/fact');
            setCatFact(response.data.fact);
        }
        catch(error){
            console.error('Errorfetching cat fact:',error);
        }
    };
    return(
        <>
        <h1>Welcome to Cat Fact Page</h1>
        <button onClick={fetchCatFact}>My data</button>
        <p>{catFact}</p>
        </>
    )
}
export default CarFactPage; 