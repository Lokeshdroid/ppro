import React, { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionToggle,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ContextAwareToggle({ children, eventKey, callback }) {
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
}

export default function DetailsAcordion() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <div className="market-4">
          <Card className="bet-table mt-1">
            <Card.Header>
              <ContextAwareToggle eventKey="0">
                <div className="bet-table-header">
                  <div className="nation-name">
                    <div className="nation-inner">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        size="sm"
                        className="dropdownButton"
                      />
                      <span className="title" title="TOURNAMENT_WINNER">
                        TOURNAMENT_WINNER
                      </span>
                    </div>
                    <span className="max-bet">
                      <span title="Max : 1">1</span>
                    </span>
                  </div>
                  <div className="back back-title bl-title d-none-mobile">Back</div>
                  <div className="lay lay-title bl-title d-none-mobile">Lay</div>
                </div>
              </ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="bet-table-mobile-row d-none-desktop"><div className="bet-table-mobile-team-name"><span>Mumbai Indians</span> <span></span></div></div>
                <div className="bet-table-row">
                  <div className="nation-name d-none-mobile">
                    <p><span>Mumbai Indians</span> <span className="float-right"></span></p>
                    <p className="mb-0"></p>
                  </div>
                  <div className="bl-box back back2"><span className="d-block odds">4</span> <span className="d-block">207.72</span></div>
                  <div className="bl-box back back1"><span className="d-block odds">4.1</span> <span className="d-block">40.13</span></div>
                  <div className="bl-box back back"><span className="d-block odds">4.2</span> <span className="d-block">319.95</span></div>
                  <div className="bl-box lay lay"><span className="d-block odds">4.3</span> <span className="d-block">63.74</span></div>
                  <div className="bl-box lay lay1"><span className="d-block odds">4.4</span> <span className="d-block">31.46</span></div>
                  <div className="bl-box lay lay2"><span className="d-block odds">4.7</span> <span className="d-block">40.46</span></div>
                </div>

                <div className="bet-table-mobile-row d-none-desktop"><div className="bet-table-mobile-team-name"><span>Kings XI Punjab</span> <span></span></div></div>
                <div className="bet-table-row suspendedtext" data-title="REMOVED">
                  <div className="nation-name d-none-mobile">
                    <p><span>Kings XI Punjab</span> <span className="float-right"></span></p>
                    <p className="mb-0"></p>
                  </div>
                  <div className="bl-box back back2 no-val"><span className="d-block odds">—</span>
                  </div>
                  <div className="bl-box back back1 no-val"><span className="d-block odds">—</span>
                  </div>
                  <div className="bl-box back back no-val"><span className="d-block odds">—</span>
                  </div>
                  <div className="bl-box lay lay no-val"><span className="d-block odds">—</span>
                  </div>
                  <div className="bl-box lay lay1 no-val"><span className="d-block odds">—</span>
                  </div>
                  <div className="bl-box lay lay2 no-val"><span className="d-block odds">—</span>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <div className="market-2">
          <Card className="bet-table mt-1">
            <Card.Header>
              <ContextAwareToggle eventKey="1">
                <div className="bet-table-header">
                  <div className="nation-name">
                    <div className="nation-inner">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        size="sm"
                        className="dropdownButton"
                      />
                      <span className="title" title="Bookmaker">
                        Bookmaker
                      </span>
                    </div>
                    <span className="max-bet">Min:<span>100</span> Max:<span>50K</span></span>
                  </div>
                  <div className="back back-title bl-title d-none-mobile">Back</div>
                  <div className="lay lay-title bl-title d-none-mobile">Lay</div>
                </div>
              </ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div class="bet-table-mobile-row d-none-desktop"><div class="bet-table-mobile-team-name"><span>West Indies.</span> <span></span></div></div>
                <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                  <div className="nation-name d-none-mobile">
                    <p><span>Mumbai Indians</span> <span className="float-right"></span></p>
                    <p className="mb-0"></p>
                  </div>
                  <div className="bl-box back back no-val"><span className="d-block odds">—</span>
                  </div>
                  <div className="bl-box lay lay no-val"><span className="d-block odds">—</span>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <div className="market-6">
          <Card className="bet-table mt-1">
            <Card.Header>
              <ContextAwareToggle eventKey="2">
                <div className="bet-table-header">
                  <div className="nation-name">
                    <div className="nation-inner">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        size="sm"
                        className="dropdownButton"
                      />
                      <span className="title" title="Normal">
                        Normal
                      </span>
                    </div>
                  </div>
                </div>
              </ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <div className="row row5">
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total match 1st over run in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total match 1st over run in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total Matches 1st over : 136 (Matches Played: 29)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total 1st 6 over run in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total 1st 6 over run in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total Matches 1st 6 over : 1228 (Matches Played: 29)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Highest innings run in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Highest innings run in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        221 runs PBKS ( 4th Match)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Lowest innings run in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Lowest innings run in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        106 runs PBKS ( 8th Match)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Tournament Topbatsman run in IPL</span> <span></span>
                        </div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Tournament Topbatsman run in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        124 runs J Buttler (RR) (28th Match)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Fastest 50 in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Fastest 50 in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        18 Balls P Shaw (DC) (25th Match)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Fastest 100 in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Fastest 100 in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        51 Balls D Padikkal (RCB) (16th Match)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Highest wicket in IPL(PURPLE CAP)</span> <span></span>
                        </div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Highest wicket in IPL(PURPLE CAP)
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        17 wkts Harshal Patel (RCB) ( Matches Played :7)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total 4's in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total 4's in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total 4's in IPL: 810 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total 6's in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total 6's in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total 6's in IPL : 380 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total 50's in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total 50's in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total 50's in IPL : 48 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total 100's in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total 100's in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total 100's in IPL : 3 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total Wickets in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total Wickets in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total Wickets in IPL : 343 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total Wides in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total Wides in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total Wides in IPL : 245 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total Extras in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total Extras in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total Extras in IPL : 465 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total Caught out in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total Caught out in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total Caught out in IPL : 238 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total bowled in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total bowled in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total bowled in IPL : 49 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total LBW in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total LBW in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total LBW in IPL : 24 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total Run-out in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total Run-out in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total Run-out in IPL : 25 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Total Hatricks Wickets in IPL</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Total Hatricks Wickets in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        Total Hatrick : 0 ( Total Matches Played : 29 )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Highest match 1st over run in IPL</span> <span></span>
                        </div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Highest match 1st over run in IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        12 runs ( 20th Match)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Highest 4 in indvidual match of IPL</span> <span></span>
                        </div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Highest 4 in indvidual match of IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        40 fours ( 2nd and 4th Match)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Highest 6 in indvidual match of IPL</span> <span></span>
                        </div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Highest 6 in indvidual match of IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        30 sixes ( 27th Match)
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Highest wicket in indvidual match of IPL</span>
                          <span></span>
                        </div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Highest wicket in indvidual match of IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        18 wickets ( 12th Match )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Highest extras in indvidual match of IPL</span>
                          <span></span>
                        </div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Highest extras in indvidual match of IPL
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        27 extras ( 12th and 15th Match )
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6">
                    <div className="fancy-tripple">
                      <div className="bet-table-mobile-row d-none-desktop">
                        <div className="bet-table-mobile-team-name"><span>Highest Partnership in IPL 2</span> <span></span></div>
                      </div>
                      <div data-title="SUSPENDED" className="bet-table-row suspendedtext">
                        <div className="nation-name d-none-mobile">
                          <p>
                            Highest Partnership in IPL 2
                          </p>
                          <p className="mb-0"></p>
                        </div>
                        <div className="bl-box lay no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="bl-box back no-val"><span className="d-block odds">—</span>
                        </div>
                        <div className="fancy-min-max">
                          Min:<span>100</span> Max:<span>100K</span></div>
                      </div>
                      <div className="market-message">
                        150 Runs J Buttler and S Samson (RR) (28th Match)
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
    </>
  );
}