import React,{useState,useRef} from 'react'
import "../styles/components/page.scss";
import HeaderTop from '../components/HeaderTop'
import LeftSideBar from '../components/left-sidear/LeftSideBar';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer'
import {Zoom} from '@material-ui/core';
import Nav from 'react-bootstrap/Nav';
import TabContainer from 'react-bootstrap/TabContainer'
import Tab from 'react-bootstrap/Tab';
import slot from '../util/data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function OurCasino() {
    const [slots,setSlots] = useState([
        {
            name:"Our Casino",
            image:"https://sitethemedata.com/v3/static/front/img/icons/our-casino.png"
        },
        {
            name:"EZUGI",
            image:"https://sitethemedata.com/v3/static/front/img/icons/ezugi.png"
        },
        {
            name:"Super Spade",
            image:"https://sitethemedata.com/v3/static/front/img/icons/ssg.png"
        },
        {
            name:"Evolution",
            image:"https://sitethemedata.com/v3/static/front/img/icons/evolution.png"
        },
        {
            name:"CockFight",
            image:"https://sitethemedata.com/v3/static/front/img/icons/cockfight.png"
        }
    ])
    const [selected,setSelected] = useState(0);
    const elementRef = useRef();
    function slideLeft(){
        elementRef.current.scrollLeft-=50
      }
      function slideRight(){
          elementRef.current.scrollLeft+=50
        }
    return (
        <div className="page-container">
            <HeaderTop />
            <LeftSideBar />
            <div className="main-container">
                <DashboardHeader />
                <div className="report-container">
                <div className="mid-container">
                    <TabContainer defaultActiveKey={slots[0].name}>
                        <div className="casino-box-tabs">
                            <div className="casino-tabs-menu">
                            <div onClick={()=>slideLeft()} class="arrow-tabs arrow-left">
                            <FontAwesomeIcon icon={faChevronLeft} />
                                </div>
                            
                            <Nav ref={elementRef} id="tab" className="nav nav-pills">
                                
                                {
                                    slots.map((e,i)=>{
                                        return <Nav.Item class="nav-item"><Nav.Link  eventKey={slots[i].name} >
                                            <img src={e.image} alt="" />
                                        {e.name}
                                    </Nav.Link></Nav.Item >
                                    })
                                }
                            </Nav>
                            
                            <div onClick={slideRight} class="arrow-tabs arrow-right">
                                <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            </div>
                        </div>
                        
                        <Tab.Content>
                        {
                            slots.map((e,i)=>{
                                return <Tab.Pane eventKey={slots[i].name}>
                                <div className="casino-banners">
                                    {
                                    slot[0].data.map((e,i)=>{
                                        return <Zoom timeout={1000}  in={true}>
                                        <div className="casino-banner-item">
                                        <div style={{
                                            backgroundSize:"cover",
                                            backgroundPosition:"center",
                                            paddingTop:"75%",
                                            backgroundImage:`url('${e.img}'), url('https://sitethemedata.com/v3/static/front/img/casino/default.jpeg')`
                                        }}>   
                                        </div>
                                        <div class="slot-title">{e.name}</div>
                                        </div>
                                        </Zoom>
                                    })
                                    }
                                </div>
                                </Tab.Pane>
                            })
                        }
                        </Tab.Content>
                        </TabContainer>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
