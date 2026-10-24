import { useState } from "react";
import Valeur from "./valeur";
function EX1(){
    const[counter,setCounter]=useState(0)
    function incrementer(){
        setCounter(counter+2)
    }
    function decrementer(){
        setCounter(counter-2)
    }
    function initialiser(){
        setCounter(0)
    }
    return(
        <div  style={{ textAlign: "center", marginTop: "40px" }}>
            <Valeur c={counter}/>
            <div>
                <button style={{ backgroundColor: "blue", color: "white", border: "none", padding: "7px 10px", margin: "0 3px", cursor: "pointer"}} onClick={incrementer}>
                    Incrementer
                </button>
                <button style={{ backgroundColor: "blue", color: "white", border: "none", padding: "7px 10px", margin: "0 3px", cursor: "pointer"}} onClick={decrementer}>
                    Decrementer
                </button>
                <button style={{ backgroundColor: "blue", color: "white", border: "none", padding: "7px 10px", margin: "0 3px", cursor: "pointer"}} onClick={initialiser}>
                    Initialiser
                </button>
            </div>
        </div>
    )
}
export default EX1;