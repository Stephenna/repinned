import React, { useState, useRef } from "react";
import styled from "styled-components";
import { CancelOutlined } from "@material-ui/icons";
import http from "../../http";
const Register = ({ setShowRegister }) => {
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await http.post("/users/register", newUser);
      setValid(true);
      setInvalid(false);
    } catch (e) {
      setInvalid(true);
      console.log(`FRONT-END: error creating new user. ${e}`);
    }
  };

  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Create User: </label>
        <input
          type="text"
          placeholder="Username"
          ref={usernameRef}
          className="register-form"
        />
        <input
          type="text"
          placeholder="email"
          ref={emailRef}
          className="register-form"
        />
        <input
          type="text"
          placeholder="password"
          ref={passwordRef}
          className="register-form"
        />
        <button className="registerbtn">Register</button>
      </form>
      {valid && (
        <p className="success">
          Success! Please Login {usernameRef.current.value}
        </p>
      )}
      {invalid && <p className="failed">Uh Oh! Invalid password/username!</p>}
      <CancelOutlined
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      />
    </RegisterContainer>
  );
};

export default Register;

const RegisterContainer = styled.div`
  width: 300px;
  height: 250px;
  padding: 30px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: #f4433690 0px 7px 29px 0px;
`;
