import React, { useRef, useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
// import "../../styles/components/sports.scss";
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import { eventService } from "../../services/eventService";
import { floorNumber } from "../../helpers/floor";

SwiperCore.use([Pagination]);

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

export default function TabContainer() {
  const tabContainer = useRef()
  const [nextBtn, setNextBtn] = useState('');
  const [width, setWidth] = useState(0);
  const [prevBtn, setPrevBtn] = useState('');
  const [activeTab, setActiveTab] = useState(1);
  const [menuitem,setMenu]=useState([]);
  const [eventData,setEventData]=useState([]);
  const [selectedId,setSelectedId]=useState(4);

  useEffect(async() => {
    setPrevBtn(tabContainer.current.querySelector('.arrow-left'))
    setNextBtn(tabContainer.current.querySelector('.arrow-right'))
    setWidth(tabContainer.current.clientWidth - 60)
    setInterval(async()=>{
        console.log("calling api in 2sec")
        const res1 = await eventService.eventsByType(selectedId);
        const res = await eventService.leftEventsMenu()
        if(res.result){
          setMenu(res.result.sort((a,b)=>a.sortOrder-b.sortOrder));
        }
        if(res1.result){
            console.log(res.result)
            console.log(res1.result)
            setEventData(res1.result);
            // console.log(eventData)
        }
    },10000)
   
  }, [tabContainer,menuitem,eventData])

  return (
    <>
      <div className="tab-container" ref={tabContainer}>
        <div className="arrow-tabs arrow-left">
          <FontAwesomeIcon icon={faChevronLeft} size="sm" />
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={'auto'}
          slideToClickedSlide={true}
          allowTouchMove={false}
          loop={false}
          navigation={{ nextEl: nextBtn, prevEl: prevBtn }}
          centeredSlides={false}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(e) => setActiveTab(e.realIndex + 1)}
          className="tab-nav-main"
          slidesOffsetAfter={width}
        >
          {
            menuitem.map((sport, i) => {
              return (
                <SwiperSlide key={i} className={"tab-main sport-" + (i+1)} onClick={() => setActiveTab(i+1)}>
                  <i className={"gm gm--"+ data[i].icon} /><span>{sport.name}</span>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <div className="arrow-tabs arrow-right">
          <FontAwesomeIcon icon={faChevronRight} size="sm" />
        </div>
        <div className="tab-content">
          {
            menuitem.map((sport, i) => {
              return (
                <div className={"bet-table " + (activeTab === i+1 ? "active" : "")}>
                  <div className={"bet-table-header sport-" + (i+1)}>
                    <div className="game-title">
                      <i className={"gm gm--"+ sport.name} /><span>{sport.name}</span>
                    </div>
                    <div className="point-header">
                      <div className="point-title d-none-mobile">1</div>
                      <div className="point-title d-none-mobile">X</div>
                      <div className="point-title d-none-mobile">2</div>
                    </div>
                  </div>
                  <div className="bet-table-body">
                      {
                          eventData.map((e,i)=>{
                              return(
                                <div className="bet-table-box">
                        <div className="bet-table-row-header-mobile d-none-desktop">
                            <div className="game-title">
                                {
                                    e.inPlay?
                                    <div className="game-date inplay"><span>Live</span></div>:<div className="game-date">
                                    <p className="day text-left">{e.event.openDate}</p>
                                    <p className="mb-0 day text-left">17:30</p>
                                </div>
                                }
                                <div className="game-name d-inline-block"><a
                                        href="/sport/cricket/SeK7puKGhm+IDlF%2FzygDVg==/umKN%2FU59Ug%2F9PoD5hJi3cg==" className="">
                                        <p className="team-name text-left">{e.event.name}</p>
                                        <p className="team-name text-left team-event">{e.competition.name}</p>
                                    </a>
                                    <div className="game-icons">
                                        <div className="game-icon"><span className="f-bm-icon">F</span></div>
                                        <div className="game-icon"><span className="f-bm-icon">F1</span></div>
                                        <div className="game-icon"><span className="f-bm-icon">BM</span></div>
                                        <div className="game-icon"><i className="gm--tv"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bet-table-row">
                            <div className="game-title d-none-mobile">
                            {
                                    e.inPlay?
                                    <div className="game-date inplay"><span>Live</span></div>:<div className="game-date">
                                    <p className="day text-left">{e.event.openDate.slice(0,6)}</p>
                                    <p className="mb-0 day text-left">{e.event.openDate.slice(12,17)}</p>
                                </div>
                                }
                                <div className="game-name d-inline-block"><a
                                        href="/sport/cricket/SeK7puKGhm+IDlF%2FzygDVg==/umKN%2FU59Ug%2F9PoD5hJi3cg==" className="">
                                        <p className="team-name text-left">{e.event.name}</p>
                                        <p className="team-name text-left team-event">{e.competition.name}</p>
                                    </a></div>
                                <div className="game-icons">
                                    <div className="game-icon"><span className="f-bm-icon">F1</span></div>
                                    <div className="game-icon"><span className="f-bm-icon">F</span></div>
                                    <div className="game-icon"><span className="f-bm-icon">BM</span></div>
                                    <div className="game-icon"><i className="gm--tv"></i></div>
                                </div>
                            </div>
                            <div className={ e.status==="SUSPENDED"?"point-title suspended":"point-title"}>
                                <div className="text-center d-none-desktop point-title-header">1</div>
                                <div className="back bl-box"><span className="d-block odds">{e.runners[0].back.length!=0?floorNumber(e.runners[0].back[0].price) :""}</span></div>
                                <div className="lay bl-box"><span className="d-block odds">{e.runners[0].lay.length!=0?floorNumber(e.runners[0].lay[0].price):""}</span></div>
                            </div>
                            <div className={e.status==="SUSPENDED"?"point-title suspended":"point-title"}>
                                <div className="text-center d-none-desktop point-title-header">X</div>
                                <div className="no-val bl-box"><span className="d-block odds">—</span></div>
                                <div className="no-val bl-box"><span className="d-block odds">—</span></div>
                            </div>
                            <div className={e.status==="SUSPENDED"?"point-title suspended":"point-title"}>
                                <div className="text-center d-none-desktop point-title-header">2</div>
                                <div className="back bl-box"><span className="d-block odds">{e.runners[1].back.length!=0?floorNumber(e.runners[1].back[0].price):""}</span></div>
                                <div className="lay bl-box"><span className="d-block odds">{e.runners[1].lay.length!=0?floorNumber(e.runners[1].lay[0].price):""}</span></div>
                            </div>
                        </div>
                    </div>
                   
                              );
                          })
                      }
                    </div>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </>
  );
}
