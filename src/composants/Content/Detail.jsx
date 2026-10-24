function Detail(){
    let nomcomplet="Mohamed El Bakkali";
    let id_stud='321000001';
    let Class='4';
    let Section='A';
    return(
        <div>
            <img src="src/composants/img/portrait-homme-sourire-personne-heureuse-confiance-style-decontracte-dans-studio-fond-gris-isole-visage-modele-masculin-jeune-mode-moderne-vetements-elegants_590464-180520.avif" alt="profilphoto"  />
            <p>{nomcomplet}</p>
            <hr />
            <p>Student ID:{id_stud}</p>
            <p>Class:{Class}</p>
            <p>Section:{Section}</p>
        </div>
    )
}
export default Detail;