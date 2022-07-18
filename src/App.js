import React from "react"
import TopBar from "./component/TopBar"
import Home from "./component/Home"
import Tableau from "./component/Tableau";
import Facture from "./component/Facture";
import Saisie from "./component/Saisie";
import Graphic from "./component/Graphics";
export default function App(){
    const[page,setPage]=React.useState(0)
    const[excel,setExcel]=React.useState("[]")
    const[fournisseur,setFournisseur]=React.useState("[]")
    const[col,setCol]=React.useState("[]")
    const[mounth,setMounth]=React.usetState("07")
    function choosePage(number){
        setPage(number)
    }
    return (
        <div>
            <TopBar choosePage={choosePage} setExcel={setExcel} setFournisseur={setFournisseur} setCol={setCol}/>
            {page==0 && <Home excel={excel} mounth={mounth}setMounth={setMounth}/>}
            {page==1 && <Saisie excel={excel} col={col}/>}
            {page==2 && <Facture excel={excel} fournisseur={fournisseur}/>}
            {page==3 && <Graphic excel={excel} fournisseur={fournisseur}/>}
        </div>
    )
}
