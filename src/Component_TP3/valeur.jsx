function Valeur(props){
    return(
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <div style={{width: "350px",
            height: "80px", 
            border: "1px solid gray", 
            margin: "0 auto 15px", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            fontSize: "36px", 
            fontWeight: "bold"}}>
            {props.c}
            </div>
        </div>
    )
}
export default Valeur;