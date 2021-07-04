import React from "react";
import ReactModal from "react-modal";
import ActionButton from "./ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  content: {
    width: "500px",
    padding: "20px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#23292e",
    color: "#fff",
    border: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: "0 0 10px 10px",
  },
};

export default function LoginModal({ isModalOpen, handleClose, onLogin, inputs, handleChange }) {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleClose}
      style={customStyles}
    >
      <div className="pointer">
        <FontAwesomeIcon icon={faTimesCircle} size="lg" onClick={handleClose} />
      </div>
      <div className="modal--inner">
        <form>
          <h3>LOGIN</h3>
          <div className="form-group">
            <label className="label-text">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              id="username" name="username"
              value={inputs.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label-text">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              id="password" name="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox d-inline-block">
              <label htmlFor="customCheck" className="custom-control-label">
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="custom-control-label"
                    checked={inputs.terms}
                    onChange={handleChange}
                    value="sad"
                />
                I am at least{" "}
                <a href="http://" className="text-danger" rel="noreferrer">
                  18 years
                </a>{" "}
                of age and I have read, accept and agree to the{" "}
                <a href="/game-rules" className="" target="_blank">
                  Game Rules
                  {" "}
                </a>
                ,{" "}
                <a
                  href="https://www.gamcare.org.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GamCare
                </a>
                ,{" "}
                <a
                  href="https://www.gamblingtherapy.org/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gambling Therapy
                </a>
              </label>
            </div>
          </div>
          <ActionButton title={"login"} handleModalOpen={onLogin} />
          { !inputs.user ?
              <label className="label-text">{inputs.loginError}</label> :
              null
          }
        </form>
      </div>
    </ReactModal>
  );
}
