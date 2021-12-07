import React, {useState, useRef} from "react";
import styled from "styled-components";
import { CancelOutlined } from '@material-ui/icons';
import http from "../../http";

const Login = ({setCurrentUser, setShowLogin, storage}) => {
    const [invalid, setInvalid] = useState(false)
    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            username: nameRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            const res = await http.post("/users/login", user);
            storage.setItem("user", res.data.username)
            setCurrentUser(res.data.username);
            setShowLogin(false)
            setInvalid(false)
        } catch (e) {
            setInvalid(true)
            console.log(`FRONT-END: error posting user to backend: ${e}`);

        }


    }

    return (
        <LoginContainer>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" ref={nameRef}/>
                <input type="text" placeholder="password" ref={passwordRef} />
                <button className="buttonLogin">Login</button>
            </form>

            {
                invalid && 
                <Failed>
                    <p>Uh Oh! Incorrect password/username!</p>
                </Failed> 
            }

            <CancelOutlined className="registerCancel" onClick={() => setShowLogin(false)}/>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
  width: 275px;
  height: 220px;
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
  box-shadow: #c9007544 0px 7px 29px 0px;
`
const Failed = styled.div`

`