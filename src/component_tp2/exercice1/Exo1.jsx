import {useState} from "react" 
function Ex1(){
    const[pseudo,setPseudo]=useState("");
    return(
        <div>
            <input type="text" value={pseudo} onChange={e=>setPseudo(e.target.value)} maxLength={20}/>
            <p style={{ color: !(pseudo.length === 20) ? "black" : "red" }}> {pseudo.length} / 20 caractères</p>
            <div>
                <h2> Aperçu en direct</h2>
                <p>Bonjour,{(pseudo==="")?"anonyme !":pseudo}</p>         
            </div>
        </div>
    )
}
export default Ex1;