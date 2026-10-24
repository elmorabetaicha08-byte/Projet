function UserCard(props){
    return(
         <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px",
            width: "300px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
            <h2>{props.user.name}</h2>

            <p><strong>ID :</strong> {props.user.id}</p>
            <p><strong>Nom d'utilisateur :</strong> {props.user.props.username}</p>
            <p><strong>Email :</strong> {props.user.email}</p>
            <p><strong>Téléphone :</strong> {props.user.phone}</p>
            <p><strong>Site web :</strong> {props.user.website}</p>

            <h3>Adresse</h3>
            <p>{props.user.address.street}, {props.user.address.city}</p>

            <h3>Entreprise</h3>
            <p>{props.user.company.name}</p>
        </div>
    )
}
export default UserCard;