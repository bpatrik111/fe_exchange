import React, { useEffect, useState } from "react";
import './Layout.css';

export default function Layout(){

    const [amount, setAmount] = React.useState(0);
    const [from, setFrom] = React.useState(0);
    const [to, setTo] = React.useState(0);

    const amountChangeHandler = (e)=>{
        if(!isNaN(e.target.value)){
            setAmount(e.target.value);
        }
    }

    const fromChangeHandler = (e)=>{
        setFrom(e.target.value);
    }

    const toChangeHandler = (e)=>{
        setFrom(e.target.value);
    }


    const submitBTNClick = (e)=>{
        
    }

    useEffect(() => {
        fetch("localhost:50883/symbols")
        .then(response => response.json())            
        .then(data => {
            
        })
      },[])

    
    

    return (
        <div>
            <h2>
              Online valutaváltó  
            </h2>
            <ul className='frame'>
                <li>
                    <span>Összeg</span>
                    <input onChange={amountChangeHandler}></input>
                </li>
                <li>
                    <label for="from">Erről a valutáról</label>
                    <select id="from" onChange={fromChangeHandler}>
                        <option value="huf">HUF</option>
                    </select>
                </li>
                <li>
                    <label for="to">Erre a valutára</label>
                    <select id="to" onchange={toChangeHandler}>
                        <option value="eur">EUR</option>
                    </select>
                </li>
            </ul>
            <button onClick={submitBTNClick}>mehet</button>
            <div>200 000 HUF</div>
            <div>620 EUR</div>

        </div>
    )
}

