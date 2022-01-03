import React from "react"
import { Chrono } from "react-chrono";

const Lifetime = () => {
  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  },{
    title: "May 1947",
    cardTitle: "Dunkirk",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to..",
  },{
    title: "May 1949",
    cardTitle: "Dunkirk",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  }];

  return (
    <div style={{ width: "80%", height: "400px", margin:"auto auto"}}>
      <Chrono 
        items={items}
        mode="VERTICAL"
        cardHeight="100"
        hideControls="true"
        />
    </div>
  )
}

export default Lifetime;