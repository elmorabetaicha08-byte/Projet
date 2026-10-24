import { useState } from "react"
import Input from "./RechercheInput"
import Select from "./RechercheSelect"
import Resultat from "./Resultat"
function Recherche(){
    const list=[ 
        {nom:"banane",type:"fruit"},
        {nom:"orange",type:"fruit"},
        {nom:"pomme",type:"fruit"},
        {nom:"raisins",type:"fruit"},
        {nom:"kiwi",type:"fruit"},
        {nom:"tomate",type:"legume"},
        {nom:"carotte",type:"legume"},
        {nom:"pomme de terre",type:"legume"},
        {nom:"navet",type:"legume"},
        {nom:"poivron",type:"legume"}
    ];
    const[nom,setNom]=useState("");
    const[type,setType]=useState("");
    const[r,setR]=useState();
    function resultat(){
        return setR=list.filter((p)=>p.nom.includes(nom) && p.type===type)
    }
    return(
        <div>
            <Input n={setNom}/>
            <Select t={setType}/>
            <Resultat r={resultat}/>
        </div>
    )
}
export default Recherche;