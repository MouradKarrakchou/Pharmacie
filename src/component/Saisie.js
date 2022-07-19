import React from "react"
import Tableau from "./Tableau";
import DateSelection from "./DateSelection";

export default function Saisie(props){
    console.log(props)
    return(
        <div>
            <Tableau excel={props.excel} col={props.col}/>
            <DateSelection selectMounth={props.selectMounth} mounth={props.mounth}/>
        </div>
    )
}
