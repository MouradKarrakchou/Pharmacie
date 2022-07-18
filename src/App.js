import React from "react"
import TopBar from "./component/TopBar"
import Home from "./component/Home"
import Tableau from "./component/Tableau";
import Facture from "./component/Facture";
import Saisie from "./component/Saisie";
import Graphic from "./component/Graphics";
export default function App(){
    let json='{"01":"[]", "02":"[]", "03":"[]", "04":"[]", "05":"[]", "06":"[]", "07":"[]", "08":"[]", "09":"[]", "10":"[]", "11":"[]","12":"[]"}';
    const[page,setPage]=React.useState(0)
    const[excel,setExcel]=React.useState("[]")
    const[excel2,setExcel2]=React.useState(json)
    const[fournisseur,setFournisseur]=React.useState("[]")
    const[col,setCol]=React.useState("[]")
    const[mounth,setMounth]=React.usetState("07")
    function choosePage(number){
        setPage(number)
    }
    function setPageMounth(mounth){
        setMounth(mounth)
        setExcel(excel2[mounth])
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
