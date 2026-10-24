import { useState } from "react";
function Input(props){
    return(
        <div>
            <input type="text" value={nom} onChange={e=>setNom(e.target.value)} />
            <button type="submit">Rechercher</button>
        </div>
    )
}
export default Input;