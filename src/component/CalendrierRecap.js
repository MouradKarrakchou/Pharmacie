import React from "react"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

let mois=["01","02","03","04","05","06","07","08","09","10","11","12"]
function handleJson(date,jsonMounthEntry,mounth,array){
    let jsonMounth=JSON.stringify(jsonMounthEntry)
    console.log(jsonMounth)
    let evenement=Array.from(jsonMounth).map((ligne)=>{
        return(new Date(ligne.DATE,mounth,new Date().getFullYear())>((new Date())) ? { ...ligne,title: ligne.SoldePrev,color:"blue" }:{ ...ligne,title: ligne.ENE,color:"green"})
    });
    evenement.forEach((ligne)=>{
        array.push(ligne.DATE<10 ? { title: ligne.title, date: `2022-${mounth}-0${ligne.DATE}`,color:ligne.color}:{ title: ligne.title, date: `2022-${mounth}-${ligne.DATE}`,color:ligne.color })
    });
}
function handleAllMounthJson(json){
    let array=[];
    mois.forEach(m=>{handleJson(new Date(),json[m],m,array)})
    return array
}





export default function CalendrierRecap(props){
    let json=JSON.stringify(props.excel2.toString())
    console.log(handleAllMounthJson(json))
    const handleEventClick = ({ event, el }) => {
        props.setDate(new Date(event._instance.range.start));
    };
    return (
        <div className="App">
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={[]}
                locale="fr"
                eventClick={handleEventClick}
            />
        </div>
    );
};
