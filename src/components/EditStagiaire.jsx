import { useState } from "react"

function Editstagiaire(props){
    const{stagiaire,setStagiaire}=useState(props.stagiaireList)
    return(
        <div>
            <form onSubmit={e=> editstagiaire()}>
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
            </form>
        </div>
    )
}