import React from "react";
import cData from "../data.js"

export default function Home(){

    const [data, Setdata] = React.useState("");
    function getData(){
        const Cdata = cData.currency
        Setdata(Cdata)
    }

    return(
        <div>
            <button onClick={getData}>Click</button>
            <h1>{data}</h1>
        </div>
    )
}