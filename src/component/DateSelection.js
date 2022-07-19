import React from "react"

export default function DateSelection(props){
    function handleChange(event){
        props.selectMounth(new Date(event.target.value).getMonth()+1)
    }
    function beautyfierMounth(){
        return(props.mounth<10?`0${props.mounth}`:props.mounth)
    }
    return(
        <div>
            <label className="Saisie--text" htmlFor="dateSelectionneur">Mois selectionné:</label>
            <input type="month" name="dateofbirth" id="dateSelectionneur" onChange={handleChange}
            value={`${(new Date()).getFullYear()}-${beautyfierMounth()}`}/>
        </div>
    )
}
