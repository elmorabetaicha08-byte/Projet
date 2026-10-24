function StagiaireCard(props){
    return(
        <table>
            <td>{props.stagiaire.nom} </td>
            <td>{props.stagiaire.prenom}</td> 
            <td>{props.stagiaire.filiere}</td>
        </table>     
    )
}
export default StagiaireCard;