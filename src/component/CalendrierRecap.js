import React from "react"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


export default function CalendrierRecap(props){
    let evenementtot=[]
    for(let k=1;k<13;k++){
        let json=props.excel2[k]
        let evenement=json.map((ligne)=>{
            return(new Date(new Date().getFullYear(),k-1,ligne.DATE)>new Date() ? { ...ligne,title: ligne.SoldePrev,color:"blue" }:{ ...ligne,title: ligne.ENE,color:"green"})
        });
        evenement = evenement.map((ligne)=>{
            return(ligne.DATE<10 ? { title: ligne.title, day: `0${ligne.DATE}`,color:ligne.color}:{ title: ligne.title, day: `${ligne.DATE}`,color:ligne.color })
        });
        evenement = evenement.map((ligne)=>{
            return( k<10 ? { title: ligne.title, date: `2022-0${k}-${ligne.day}`,color:ligne.color}:{ title: ligne.title, date: `2022-${k}-${ligne.day}`,color:ligne.color })
        });
        evenementtot=evenementtot.concat(evenement)
    }


    const handleEventClick = ({ event, el }) => {
        props.setDate(new Date(event._instance.range.start));
    };
    console.log(evenementtot)
    return (
        <div className="App">
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={evenementtot}
                locale="fr"
                eventClick={handleEventClick}

            />
        </div>
    );
}
