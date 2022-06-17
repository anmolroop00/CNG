import React from "react";

export default function Home(){

    const [CryptoData, SetCryptoData] = React.useState();
    function getData(){
        fetch("https://api.nomics.com/v1/currencies/ticker?key=c3dcb27c89e8009159eb873d4a6477e3c0dd59b7&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
        .then(response => response.json())
        .then(data => SetCryptoData(data))
    }
    console.log(typeof(CryptoData))
    /*
    function extractInfo(arr, prop){
        const extractedValue = arr.map(item => item[prop])
        return extractedValue
    }
    
    const result = extractInfo(CryptoData, 'currency')
    console.log(result)
    */
    return(
        <div>
            <button onClick={getData}>Get Data</button>
            <h1 className="home">This is home page</h1>
        </div>
    )
}