import React,{useState} from 'react'
import "../styles/components/page.scss";
import HeaderTop from '../components/HeaderTop'
import LeftSideBar from '../components/left-sidear/LeftSideBar';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer'
import SlotNote from '../components/fantasyGames/slotNote';
import CasinoBanner from '../components/fantasyGames/casinoBanners';
import FantasyDetail from '../components/fantasyGames/fantasydetails';
import { eventService } from '../services/eventService';

export default function Others() {
    const [selected,setSeleted] = useState(0)
    const [fade,setFade] = useState(true);
    const games=[{
        "name":"BINARY OPTIONS",
        "imageurl":"https://sitethemedata.com/casino_icons/other/binary.jpg",
        "details":[
            {
                "title":"Information",
                "data":`<ol class="list-outside"><li>Binary Options trading involves deciding whether the price of the underlying asset is going to increase or decrease. If you choose Up option: you get profit if the closing price is higher than opening price. If you choose Down option: you get profit if the closing price is lower than the opening price.</li> <li>However, if you incorrectly predicted the price movement (upwards or downwards) of the underlying asset, you will incur of 100% of your invested amount.</li> <ul><li class="pl-4">Up option: closing price &gt; opening price</li> <li class="pl-4">Down option: closing price 	&lt; opening price</li></ul> <li>It does not matter how significantly price changes. If the closing price will be equal to opening price, your initial investment into a deal will be returned back to your balance.</li></ol>`
            }
        ]
    },
];
eventService.inPlayEvents(4)
function changeTrainsition(i){
    console.log("fghjd");
    setFade(!fade)
    setTimeout(() => {
        setFade(true)
        setSeleted(i);
    }, 500);
}
    return (
        <div className="page-container">
            <HeaderTop />
            <div className="main-container">
                <DashboardHeader />
                <div className="report-container">
                <div className="mid-container">
            <SlotNote/>
            <CasinoBanner games={games} selected={selected} changeTransition={(i)=>changeTrainsition(i)} />
             <FantasyDetail games={games[selected]} fade={fade} />
          </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
