import { useState, useEffect } from "react";

//utility function to fetch image

async function fetchData (string) {
   
        const apiKey = '47983806-5d69dad02fddea8f4141376c1';
        const proxyURL = 'https://corsproxy.io/?';
        const targetAPI = `http://pixabay.com/api/?key=${apiKey}&id=${string}`;
        const api = proxyURL + targetAPI;
     
            const response = await fetch(api);
            if (!response.ok) throw new Error('Network response error')
            
            const data = await response.json();
            
            if ( data.hits && data.hits.length > 0 ){
                const url = data.hits[0].largeImageURL;
                console.log(data.hits[0].largeImageURL);
                return url;
            }  
}

export default fetchData;