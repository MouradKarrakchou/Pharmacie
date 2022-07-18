import React from "react"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


export default function CalendrierEcheance(props){
    let json=JSON.parse(props.excel)
    let evenement=json.map((ligne)=>{
        return(ligne.DATE>((new Date()).getDate()-1) ? { ...ligne,title: ligne.Totdp,color:"red" }:{ ...ligne,title: ligne.Totdp,color:"green"})
    });
    evenement = evenement.map((ligne)=>{
        return(ligne.title!=0 ? {...ligne}:{})
    });
    evenement = evenement.map((ligne)=>{
        return(ligne.DATE<10 ? { title: ligne.title, date: `2022-07-0${ligne.DATE}`,color:ligne.color}:{ title: ligne.title, date: `2022-07-${ligne.DATE}`,color:ligne.color })
    });
    const handleEventClick = ({ event, el }) => {
        props.setDate(new Date(event._instance.range.start));
    };
    console.log(evenement)
    return (
        <div className="App">
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={evenement}
                locale="fr"
                eventClick={handleEventClick}

            />
        </div>
    );
}
