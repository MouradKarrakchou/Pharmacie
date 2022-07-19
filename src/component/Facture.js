import React from "react"
import CalendrierEcheance from "./CalendrierEcheance";
import DateSelection from "./DateSelection";

export default function Facture(props){
    const [date,setDate]=React.useState(new Date());
    const json=props.excel
    const jsonFourniss=props.fournisseur
    function getAllFournisseur(){return(jsonFourniss.map(
        fourni=>{
            return(<h4>{json[31]?`${fourni.Fournisseur} : ${json[31][fourni.Fournisseur]}`:""}</h4>)
        }
    ))}

    return (
        <div>
            <div className="Facture">
                <div className="Facture--calen">
                    <h1>Facture à payer</h1>
                    <CalendrierEcheance excel2={props.excel2} excel={props.excel} setDate={setDate}/>
                </div>
                <div className="Facture--calen">
                    <h1 className="Facture--text">Recap par fournisseur</h1>
                    <DateSelection selectMounth={props.selectMounth} mounth={props.mounth}/>
                    {getAllFournisseur()}
                </div>
            </div>

        </div>
    )
}
