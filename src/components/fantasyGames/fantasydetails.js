import React from "react";
import "../../styles/components/fantasy.scss";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer'
import {Fade} from '@material-ui/core';

export default function FantasyDetail({games,fade}){
    return (
        <Fade timeout={500} in={fade}>
        <div className="fantasy-desc-container mt-1">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src={games.imageurl}
                className="img-fluid w-100"
              />
            </div>
            <div className="col-12 col-md-6">
              <h1 className="fantasy-detail-title">
                <span>{games.name}</span>
              </h1>
              <div>
                <button class="btn btn-lg btn-primary">Play</button>
              </div>
              <div>
                <TabContainer defaultActiveKey={games.details[0].title}>
                  <div className="casino-tabs">
                    <Nav className="nav-tabs">
                      {
                        games.details.map((e,i)=>{
                          return <Nav.Item className="nav-item">
                          <Nav.Link eventKey={e.title}>
                            {e.title}
                          </Nav.Link>
                        </Nav.Item>
                        })
                      }
                      
                      {/* <Nav.Item className="nav-item">
                        <Nav.Link eventKey="howtoplay">
                          How to play
                        </Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                  </div>

                  <Tab.Content>
                  {
                        games.details.map((e,i)=>{
                          return <Tab.Pane eventKey={e.title} dangerouslySetInnerHTML={{__html:e.data}}>
                          </Tab.Pane>
                        })
                      }
                    
                    {/* <Tab.Pane eventKey="howtoplay">
                      
                    </Tab.Pane> */}
                  </Tab.Content>
                </TabContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    );
}