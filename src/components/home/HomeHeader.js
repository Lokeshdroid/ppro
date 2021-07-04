import React from "react";
import logo from "../../assets/images/logo.png";
import ActionButton from "../ActionButton";
import AppLink from "../AppLink";
import UpcomingFixture from "./UpcomingFixture";

export default function HomeHeader({openModal, onLogout, user}) {
  return (
    <>
      <div className="home-new-header">
        <img src={logo} alt="logo" className="home-logo" />
        <div className="home-header-right">
          <AppLink title={"Download APK"} icon={"android"} link={"#"} />
            { !user ?
                <ActionButton title={"Login"} handleModalOpen={openModal}/> :
                < ActionButton title = {"Logout"} handleModalOpen={onLogout}/>
            }
        </div>
      </div>
      <UpcomingFixture num="14" />
    </>
  );
}
