import {useState} from "react"
function Ex2(){
    const[isVisible,setIsVisible]=useState(false)
    return(
        <div>
            {isVisible ?"Nom : Aicha - Filière : DEV":""}
            <button onClick={setIsVisible=(!isVisible)}>{isVisible?"Afficher les informations":"Masquer les informations"}</button>
        </div>
    )
}
export default Ex2;