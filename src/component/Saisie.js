import React from "react"
import Tableau from "./Tableau";

export default function Saisie(props){
    return(
        <div>
            <Tableau excel={props.excel} col={props.col}/>
        </div>
    )
}
