// import { useEffect,useState } from "react";

// function useCurrencyInfo(currency){
//     const [data,setData] = useState({})
   
//     useEffect(()=>{
//         // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         // YOUR_API_KEY : 5bd61bff890a757f1240e13f
//         fetch(`https://v6.exchangerate-api.com/v6/5bd61bff890a757f1240e13f/latest/${currency}`)
//         .then((res)=>res.json())
//         .then((res)=>setData(res[currency]))
//         console.log("DATA SHOW ",data);


//     },[currency])
//     console.log(data)
//     return data
// }
// export default useCurrencyInfo; 

import {useEffect, useState} from "react"



function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/5bd61bff890a757f1240e13f/latest/USD'`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
      
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;