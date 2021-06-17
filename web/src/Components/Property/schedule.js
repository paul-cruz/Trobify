import React, {useState, useEffect} from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { getLoggedUserId } from "../../Utils/auth";
import {getProperty} from "../../Utils/functions";
import {updateProperty} from "../../Utils/functions";

export default function Schedule({ id, initialEvents}) {  
  const [apoiments, setApoiments] = useState([]);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    getProperty(id).then((prop) => { 
      setProperty(prop);
      if(prop.apoiments){
        setApoiments([...apoiments,...prop.apoiments]);
      } 
    });
  }, []);

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Introduce tu nombre y número de teléfono");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: getLoggedUserId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEvents = (events) => {
    setApoiments([...apoiments, ...events]);    
  };

  const handleAdd = (events) =>{
    setApoiments(events);
    updateProperty(id, 
      {
        "apoiments":apoiments
      }
      );
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      initialView="timeGridWeek"
      weekends={false}
      selectable={true}
      initialEvents = {initialEvents}
      select={handleDateSelect}
      eventAdd = {handleAdd}
      //eventContent={renderEventContent}
      eventsSet={handleEvents} // called after events are initialized/added/changed/removed
    />
  );

  
}

/*function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}*/
