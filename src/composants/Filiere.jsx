function Filiere(){
    let filiers=[
        {id:1,name:"DEV"},
        {id:2,name:"AI"},
        {id:3,name:"Infographie"},
        {id:4,name:"Securite"},
    ];
    let notes=[10,12,20]
    let satgiaires=[
        {prenom:"zainab",nom:"chb"},
        {prenom:"aicha",nom:"elme"},
        {prenom:"rania",nom:"elmi"},
    ];
    return (
        <div>
            <ul>
                {filiers.map((filiere,index)=>(
                    <li key={filiere.id}>
                        {filiere.id} - {filiere.name} ---- index{index}
                    </li>
                ))}
            </ul>
            les notes
            <ul>
                {notes.map((note,index)=>(
                    <li key={index}>{note}</li>
                ))}
            </ul>
            les stagiaires:
            <ul>
                {satgiaires.map((stg,prenom)=>(
                    <li key={stg.prenom}>
                        {prenom} 
                        {stg.nom}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Filiere;