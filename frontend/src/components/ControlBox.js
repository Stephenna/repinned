import React, { useState } from "react";
import Login from "./account/Login";
import Register from "./account/Register";
import styled from "styled-components";
import { NavigationControl } from "react-map-gl";
import { EditLocationOutlined} from '@material-ui/icons';
const ControlBox = ({ currentUser, setCurrentUser, storage }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navControl = {
   color: 'pink',
  }

  return (
    <Container>
    <div className="logo"><EditLocationOutlined />Pinned</div>
    <NavigationControl  style={navControl}/>
      <Buttons>
        {currentUser ? (
          <button
            className="logout"
            onClick={() => {
              storage.removeItem("user");
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

      {showLogin && (
        <Login
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setShowLogin={setShowLogin}
          storage={storage}
        />
      )}

      {showRegister && <Register setShowRegister={setShowRegister} />}
     
    </Container>
  );
};

export default ControlBox;

const Container = styled.div`
  height: 250px;
  width: 200px;
  background-color: white;
  position: absolute;
  top: 50px;
  left: 0px;
  border-radius: 10px;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  ${'' /* width: 400px;
  height: 50px; */}
`;

