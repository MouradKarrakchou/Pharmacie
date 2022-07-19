import React from "react"
import TopBar from "./component/TopBar"
import Home from "./component/Home"
import Facture from "./component/Facture";
import Saisie from "./component/Saisie";
import Graphic from "./component/Graphics";
import {
    Routes,
    Route, BrowserRouter
} from "react-router-dom";

export default function App(){
    let javascr={};
    for(let k=1;k<13;k++){
        javascr[k]=JSON.parse("[]");
    }
    const[excel,setExcel]=React.useState(JSON.parse("[]"))
    const[excel2,setExcel2]=React.useState(javascr)
    const[fournisseur,setFournisseur]=React.useState(JSON.parse("[]"))
    const[col,setCol]=React.useState(JSON.parse("[]"))
    const[mounth,setMounth]=React.useState(7)
    console.log(mounth)
    function setExcelMounth(mounth,json){
        setExcel2(exc=>{
            return({...exc,[mounth]:json})
        })
    }

    function selectMounth(mounth){
        setMounth(mounth)
    }

    return (
        <div>
            <BrowserRouter>
                <TopBar setExcel={setExcel} setFournisseur={setFournisseur} setCol={setCol} setExcelMounth={setExcelMounth}/>
                <Routes>
                    <Route path="/" element={<Home excel2={excel2} excel={excel2[mounth]} setMounth={setMounth}/>} />
                    <Route path="facture" element={<Facture excel2={excel2} excel={excel2[mounth]} fournisseur={fournisseur} mounth={mounth} selectMounth={selectMounth}/>}/>
                    <Route path="saisie" element={<Saisie excel={excel2[mounth]} col={col} mounth={mounth} selectMounth={selectMounth}/>} />
                    <Route path="graphic" element={<Graphic excel={excel2[mounth]} fournisseur={fournisseur} mounth={mounth} selectMounth={selectMounth}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
