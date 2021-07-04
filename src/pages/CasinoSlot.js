import React,{useState,useRef,useEffect} from 'react'
import "../styles/components/page.scss";
import "../styles/components/slots.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import HeaderTop from '../components/HeaderTop'
import LeftSideBar from '../components/left-sidear/LeftSideBar';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer'
import {Zoom} from '@material-ui/core';
import Nav from 'react-bootstrap/Nav';
import TabContainer from 'react-bootstrap/TabContainer'
import Tab from 'react-bootstrap/Tab';
import slot from '../util/data';


export default function CasinoSlot() {
    const [slots,setSlots] = useState(["Booongo","Quickspin","NetEnt","Amatic","Apollo","Aristocrat","Egt","Gaminator","Greentube","Igrosoft","Kajot","konami","Merkur","Microgaming","Playson","PlayTech","Wazdan"])
    const [selected,setSelected] = useState(0);
    const elementRef = useRef();
    var bannerStyle={
        backgroundSize: "cover", 
        backgroundPostion: "center center",
         paddingTop: "75%",
         backgroundImage: "url('https://s3-eu-west-1.amazonaws.com/groove-marketing-assets/games-prod/new/b04ec4da486136c4881a722f726308b6637cf969/Games%20Catalog%20image/image.jpg') url('https://sitethemedata.com/v3/static/front/img/casino/default.jpeg')"
    }
    useEffect(() => {
        // console.log(elementRef.current.scrollLeft)
      }, []);
    function slideLeft(){
      elementRef.current.scrollLeft-=50
    }
    function slideRight(){
        elementRef.current.scrollLeft+=50
      }
      function centerItFixedWidth(target) {
        // var  out = elementRef.current.offsetWidth;
        // var tar = 120
        // var q=0;
        // for(var i=0;i<target;i++){
        //     q+=120;
        // }
        // console.log(Math.max(0,q-(out-tar)/2));
        // // console.log(elementRef.current.offsetWidth);
        // // if(target == 0){
        // //     elementRef.current.scrollLeft-=100
        // }else{
        //     elementRef.current.scrollLeft+=100
        // }
        
      }
    return (
        <div className="page-container">
            <HeaderTop />
            <LeftSideBar />
            <div className="main-container">
                <DashboardHeader />
                <div className="report-container mt-1">
                    <div className="mid-container">
                    <TabContainer defaultActiveKey={slots[0]}>
                        <div className="casino-box-tabs">

                            <div className="casino-tabs-menu">
                            <div onClick={()=>slideLeft()} class="arrow-tabs arrow-left">
                            <FontAwesomeIcon icon={faChevronLeft} />
                                </div>
                            
                            <Nav ref={elementRef} id="tab" className="nav nav-pills">
                                
                                {
                                    slots.map((e,i)=>{
                                        return <Nav.Item class="nav-item"><Nav.Link  eventKey={slots[i]} >
                                        {e}
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
                                return <Tab.Pane eventKey={slots[i]}>
                                <div className="casino-banners">
                                    {
                                    slot.find((e)=>e.key==slots[i]).data.map((e,i)=>{
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
