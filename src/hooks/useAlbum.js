import { useState, useEffect } from "react";
import axios from "axios";


export default function useAlbum() {
    const [photos, setPhotos] = useState([])

    console.log(photos)
  
    useEffect(() => {
    axios.get('http://localhost:3306/getimages', {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    
    .then(response => {        
    setPhotos(response.data)        
    })
    .catch(err => {
        console.log(err.message)
    })}, [])
  
    return photos
  }