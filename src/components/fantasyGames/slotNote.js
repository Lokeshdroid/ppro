import React from 'react'
import "../../styles/components/fantasy.scss"


export default function SlotNote(){
   return(
   <div class="slot-note">
              <div class="note-title">Note:</div>
              <div class="note-desc d-none-mobile">
                Follow FAQ when none of these games work.
              </div>
              <div class="note-desc d-none-desktop">
                <marquee>Follow FAQ when none of these games work.</marquee>
              </div>
              <a href="/faq" class="btn btn-primary mr-2">
                Click Here
              </a>
            </div>
            );

}