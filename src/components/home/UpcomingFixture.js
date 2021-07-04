import React, { useEffect, useRef, useState } from "react";
import "../../styles/components/fixtureBox.scss";

export default function UpcomingFixture(props) {
  const n = parseInt(props.num);
  const [timing, setTiming] = useState(0);
  const marquee = useRef();
  useEffect(() => {
    setTiming(((marquee.current.clientWidth < window.innerWidth ? window.innerWidth * 2 : marquee.current.clientWidth) * n) + 'ms');
  }, [marquee, n]);
  return (
    <div className="upcoming-fixture home-fixture">
      <div className="fixture-title">Upcoming Fixtures</div>
      <div className="fixture-box-container">
        <div className="marquee">
          <div className="marquee--inner" ref={marquee} style={{ animationDuration: timing }}>
            <div className="login-fixture">
              {
                [...Array(n)].map((e, i) => {
                  return <div className="fixture-box" key={i}>
                          <div className="title">
                            <i className="gm--tennis"></i>
                            Le Fernandez v Jabeur
                          </div>
                          <div className="date">17/06/2021 16:00:00</div>
                        </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
