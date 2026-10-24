function Navigation() {
    let style = { color: "blue", fontSize: "18px" ,display:"inline-block",marginRight:"10px"};
    return (
        <nav>
            <ul>
                <li><a href="#" style={style}>Accueil</a></li>
                <li><a href="#" style={style}>Profil</a></li>
                <li><a href="#" style={style}>Contact</a></li>
            </ul>
            <hr />
        </nav>
    );
}
export default Navigation;