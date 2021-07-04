import React, { useContext,useEffect,useState } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionToggle,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { eventService } from "../../services/eventService";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className={isCurrentEventKey ? "open" : "close"}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

const data = [
  { name: "Cricket", icon: "cricket-spade" },
  { name: "Tennis", icon: "tennis" },
  { name: "Football", icon: "football" },
  { name: "Table Tennis", icon: "table-tennis" },
  { name: "Horse Racing", icon: "horse-racing" },
  { name: "Greyhounds", icon: "hound" },
  { name: "Basketball", icon: "basketball" },
  { name: "Handball", icon: "beach-volleyball" },
  { name: "Ice Hockey", icon: "ice-hockey" },
  { name: "E Games", icon: "console" },
  { name: "Futsal", icon: "football-feild" },
  { name: "Rugby League", icon: "rugby" },
  { name: "Boxing", icon: "boxing" },
  { name: "Beach Volleyball", icon: "volleyball-net" },
  { name: "Mixed Martial Arts", icon: "boxing" },
  { name: "MotoGP", icon: "motorcycle" },
  { name: "Chess", icon: "chess" },
  { name: "Volleyball", icon: "volleyball" },
  { name: "Badminton", icon: "shuttle" },
  { name: "Cycling", icon: "bicycle" },
  { name: "Motorbikes", icon: "motorcycle" },
  { name: "Athletics", icon: "running" },
  { name: "Basketball 3X3", icon: "basketball" },
  { name: "Sumo", icon: "sumo" },
  { name: "Virtual sports", icon: "pc" },
  { name: "Motor Sports", icon: "motorcycle" },
  { name: "Baseball", icon: "baseball" },
  { name: "Rugby Union", icon: "rugby-ball" },
  { name: "Darts", icon: "dart-board" },
  { name: "American Football", icon: "rugby-helmet" },
  { name: "Snooker", icon: "billiard-ball" },
  { name: "Soccer", icon: "football" },
  { name: "Esports", icon: "console" },
];

export default function SidebarAccordion() {
  const [menuitem,setMenu]=useState([])
  useEffect(async()=> {
    setInterval(async() => {
      const res = await eventService.leftEventsMenu()
      if(res.result){
        setMenu(res.result.sort((a,b)=>a.sortOrder-b.sortOrder));
      }
    }, 10000);
  },[menuitem]);
  return (
    <Accordion>
      {menuitem.map((item, index) => {
        return (
          <Card className={"accordion-root sport-" + (index+1)} key={index}>
            <Card.Header className="accordion-root-header">
              <ContextAwareToggle eventKey={index+1}>
                <i className={"gm gm--"+data[index].icon}></i>
                <span className="sport-name">{item.name}</span>
              </ContextAwareToggle>
            </Card.Header>
            {
              item.children.map((e,i)=>{
                return(
                  <Accordion.Collapse eventKey={index+1}>
              <Card.Body className="accordion-root-body">
                <Accordion>
                  <Card className="accordion-inside">
                    <Card.Header className="accordion-inside-header">
                      <ContextAwareToggle eventKey="0">
                        <div className="inside-header-name">
                          {e.name}
                        </div>
                      </ContextAwareToggle>
                    </Card.Header>
                    {/* <Accordion.Collapse eventKey="0">
                      <Card.Body className="accordion-inside-body">
                        <Link to="#" className="accordionLink">
                          Exchange
                        </Link>
                      </Card.Body>
                    </Accordion.Collapse> */}
                  </Card>
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
                )
              })
            }
            
          </Card>
        );
      })}
    </Accordion>
  );
}
