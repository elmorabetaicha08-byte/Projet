// import Header from "./composants/Header";
// import Navigation from "./composants/Navigation";
// import Profil from "./composants/Content/Profil";
// import Footer from "./composants/Footer";
// import Filiere from "./composants/Filiere";
// import Client from "./composants/Exercice2/Client";
// import Visiteur from "./composants/Exercice2/Visiteur";
// import {useState} from 'react';
// //import SatgiairesList from "./components/StagiairesList";
// import Exo1 from "./component_tp2/exercice1/Exo1";
// import StudentProfile from "./component_tp2/exercice2/StudentProfile";
// import EX1 from "./Component_TP3/EX1";
// import EX2 from "./Component_TP3/EX2";
//import Recherche from "./Composant/Recherche";
//import API from "./API/testAPI";
//import Axios from "./API/testAxios"
import MainPage from "./componentApp/MainPage";
function App() {
    return(
        <div>
            {/* <Exo1/>
            <StudentProfile/> 
            <h3 style={{textAlign:"center",color:"red"}}>TP3_EX1</h3>
            <EX1/>
            <h3>TP3_EX2</h3>
            <EX2/>
            <Recherche /> */}
            {/* <API /> */}
            {/* <Axios /> */}
            <MainPage/>
        </div>
    )
//     return(
//         <div>
//             <h1>Hello in M204</h1>
//             <SatgiairesList/>
//         </div>
//     )
    // const [connect, setConnect]=useState(true)
    // function changerEtat(){
    //     setConnect(!connect)
    // }
    // return(
    //     <div>
    //         <button onClick={changerEtat}>Connecter</button>
    //         {connect? <Client firstname="Aicha"/>:<Visiteur/>}
    //     </div>
    // )
    
    // const[compteur,setCompteur]= useState(0)
    // function plus2(){
    //     setCompteur(compteur+2)
    // }
    // function moins1(){
    //     setCompteur(compteur-1)
    // }
    // return(
    //     <div >
    //         <button onClick={plus2}>+</button>
    //         <p>{compteur}</p>
    //         <button onClick={moins1}>-</button>
    //     </div>
    // )

    // const[nom,setnom]= useState("")
    // const changerNom=(e) => setnom(e.target.value)
    // const[prenom,setprenom]= useState("")
    // const changerPrenom=(e) => setprenom(e.target.value)
    // const[adress1,setadress1]= useState("")
    // const changerAdress1=(e) => setadress1(e.target.value)
    // const[adress2,setadress2]= useState("")
    // const changerAdress2=(e)=> setadress2(e.target.value)
    // const[city,setcity]= useState("")
    // const changerCity=(e)=> setcity(e.target.value)
    // const[etat,setetat]= useState("")
    // const changerEtat=(e)=> setetat(e.target.value)
    // const[codep,setcodep]= useState("")
    // const changerCodePostal=(e)=> setcodep(e.target.value)
    // const[tele,settele]= useState("")
    // const changerTele=(e)=> settele(e.target.value)
    // const[email,setemail]= useState("")
    // const changerEmail=(e)=> setemail(e.target.value)
    // return(
    //     <div>
    //         <h2>Membership Registration</h2>
    //         <form >
    //             <table>
    //                 <tr>
    //                     <td>Last Name *</td>
    //                     <td>First Name *</td>
    //                 </tr>
    //                 <tr>
    //                     <td><input type="text" value={nom} onChange={changerPrenom} /></td>
    //                     <td><input type="text" value={prenom} onChange={changerNom} /></td>
    //                 </tr>
    //                 <tr>
    //                     <td>Street Address *</td>
    //                 </tr>
    //                 <tr>
    //                     <td colSpan={2}><input type="text" value={adress1} onChange={changerAdress1}/></td>
    //                 </tr>
    //                 <tr>
    //                     <td>Address Line2 *</td>
    //                 </tr>
    //                 <tr>
    //                     <td colSpan={2}><input type="text" value={adress2} onChange={changerAdress2}/></td>
    //                 </tr>
    //                 <tr>
    //                     <td>City *</td>
    //                     <td>State *</td>
    //                 </tr>
    //                 <tr>
    //                     <td><input type="text" value={city} onChange={changerCity}/></td>
    //                     <td>
    //                         <select onChange={changerEtat}>
    //                             <option value={etat}>A</option>
    //                             <option value={etat}>B</option>
    //                             <option value={etat}>C</option>
    //                         </select>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <td>Zib Code *</td>
    //                     <td>Phone Number *</td>
    //                 </tr>
    //                 <tr>
    //                     <td><input type="text" value={codep} onChange={changerCodePostal}/></td>
    //                     <td><input type="tel" value={tele} placeholder="(___) ___-____" onChange={changerTele}/></td>
    //                 </tr>
    //                 <tr>
    //                     <td>Email Adress *</td>
    //                 </tr>
    //                 <tr>
    //                     <td colSpan={2}><input type="email" value={email} onChange={changerEmail}/></td>
    //                 </tr>
    //             </table>
    //         </form>
    //     </div>              
    // )

}

export default App;