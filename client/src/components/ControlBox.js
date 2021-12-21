import React, { useState } from "react";
import Login from "./account/Login";
import Register from "./account/Register";
import styled from "styled-components";
import { NavigationControl } from "react-map-gl";
import { EditLocationOutlined } from "@material-ui/icons";
const ControlBox = ({ currentUser, setCurrentUser, myStorage}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navControl = {
    color: "pink",
  };

  return (
    <div className="container-body">
      <NavigationControl style={navControl} />
      <Container>
        <div className="logo">
          <EditLocationOutlined />
          <p>Pinned</p>
        </div>

        <Buttons>
          {currentUser ? (
            <button
              className="logout"
              onClick={() => {
                myStorage.removeItem("user");
                setCurrentUser(null);
              }}
            >
              Logout
            </button>
          ) : (
            <div className="userBtns">
              <button
                className="login"
                onClick={() => {
                  setShowLogin(true);
                  setShowRegister(false);
                }}
              >
                Login
              </button>
              <button
                className="register"
                onClick={() => {
                  setShowRegister(true);
                  setShowLogin(false);
                }}
              >
                Register
              </button>
            </div>
          )}
        </Buttons>
      </Container>
      {showLogin && (
        <Login
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setShowLogin={setShowLogin}
          myStorage={myStorage}
        />
      )}

      {showRegister && <Register setShowRegister={setShowRegister} />}
    </div>
  );
};

export default ControlBox;

const Container = styled.div`
  height: 150px;
  width: 200px;
  background-color: white;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-top-right-radius: 10px;
  border-top-left-radius: 0px,
  border-bottom-right-radius: 10px,
  padding-top: 25px;
  z-index: 1000;
  ${"" /* box-shadow: #16537e 0px 7px 29px 0px; */}
`;
const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  ${
    "" /* width: 400px;
  height: 50px; */
  }
`;
