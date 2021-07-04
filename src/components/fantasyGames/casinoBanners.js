import React from 'react';
import {Zoom} from '@material-ui/core';
import "../../styles/components/fantasy.scss";
export default function CasinoBanner({games,selected,changeTransition}){
    return(
        <div class="casino-banners mt-0 ">
                {
                    games.map((e,i)=>{
                         return <Zoom timeout={800} in={true}> 
                         <div onClick={()=> {
                             if(selected !==i){
                                 changeTransition(i);
                               }
                             }
                        } class="casino-banner-item">
                            <img
                            src={e.imageurl}
                            class="img-fluid"
                            />
                        </div>
                        </Zoom>
                    })
                }
            </div>
    );
}