import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function DetailPage()  {

    const pathParams = useParams()

    const [details, setDetails] = useState({})

    console.log(details)

    useEffect(() => {
        axios.get(`http://localhost:3306/details/${pathParams.id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })        
        .then(response => {        
            setDetails(response.data)      
        })
        .catch(error => {
            console.log(error.message)

        })}, [])



    return <div> 
        
        <p>{details.subtitle}</p>
        <img src={details.file} />
        <p>{details.tags}</p>
                     
        </div>
}