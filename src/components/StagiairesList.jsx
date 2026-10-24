import { useState } from "react"
import StagiaireCard from "./StagiaireCard"
function StagiaireList(){
    let stagiaireList = [
        {
            id:1,
            nom:"El morabet",
            Prenom: "Aicha",
            filiere: "DEV"
        },
        {
            id:1,
            nom:"El morabit",
            Prenom: "Rania",
            filiere: "DEV"
        },
    ];
    const[stagiaires,setStagiaires]=useState(stagiaireList);
    const[nom,setNom]=useState("");
    const[prenom,setPrenom]=useState("");
    const[filiere,setFiliere]=useState("");
    const[isAdd,setIsAdd]=useState(false);
    let stg={}
    function addNewStag(event){
        event.preventDefault()
        let ids=stagiaires.length + 1 
        let stagiaire= {id:ids,nom,prenom,filiere}
        setStagiaires(stagiaires => [...stagiaires,stagiaire])
        setIsAdd(false)
        setNom("")
        setPrenom("")
        setFiliere("")
    }

    return(
        <div>
            La liste des stagiaires
            {!isAdd? <button onClick={()=>setIsAdd(true)}>Creer un nouveau stagiaire</button>:
            <form onSubmit={e => addNewStag(e)}>
                <Table>
                    <tr>
                        <td>Nom: </td>
                        <td><input 
                            type="text" 
                            value={nom}
                            onChange={(e)=> setNom(e.target.value)}
                        /></td>
                    </tr>
                    <tr>
                        <td>Prenom: </td>
                        <td><input 
                            type="text" 
                            value={prenom}
                            onChange={(e)=> setPrenom(e.target.value)}
                        /></td>
                    </tr>
                    <tr>
                        <td>Filiere:</td>
                        <td><input 
                            type="text" 
                            value={filiere}
                            onChange={(e)=> setFiliere(e.target.value)}
                        /></td>
                    </tr>                    
                </Table>
                <button type="submit">Enregistrer</button>
            </form>
            }
            {stagiaires.map((stagiaire)=>(
                <span key={stagiaire.id}><StagiaireCard stagiaire={stagiaire}/></span>
            ))}
        </div>
    )
}