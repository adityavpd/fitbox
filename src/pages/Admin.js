import { render } from "@testing-library/react";
import React, {useState} from "react";
import "./AdminStyles.css"

function Admin()
{
    const [show,setShow] = useState(false);
    const [password,setPassword] = useState('');
    function handlePasswordChange(e)
    {
        setPassword(e.target.value);
    } 
    function authClick()
    {
        
        if(password == "aaa")
        {
            setShow(true);
        }

    }
    
    render()
    {
        return(
            <div>
                {
                    show?<>
                    <div className="contact-tables">
                        
                       <h1>hi</h1>
                       <button className="login-button" onClick={()=>setShow(false)}>Logout</button>

                    </div>
                    </>:
                        <div className="login-card">
                        <input type="password" className="input" placeholder="Enter Password" onChange={(e)=>{handlePasswordChange(e)}}></input>
                        <br></br>
                        <button className="login-button" onClick={authClick}>Login</button>
                    </div>
                }
            </div>
        )
    }
}

export default Admin;