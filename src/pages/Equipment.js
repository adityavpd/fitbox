import React, {useRef, useState} from "react";
import { render } from "@testing-library/react";
import emailjs from "@emailjs/browser";
import './EquipmentStyles.css'
import rband from "../resources/rband.jpg"
import dumbbell from "../resources/dumbbell.jpg"
import abflex from "../resources/abflex.jpg"
import jumprope from "../resources/jumprope.jpg"


function Equipment()
{
        const [emaild, setEmailid] = useState('');
        const form = useRef();
        function handleEmailChange(e)
        {
            setEmailid(e.target.value);
        }
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_0mh4pch', 'template_flx657a', form.current, 'AnOk4ADkKQvUhNnzV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
      

    render()
    {
        return(<>
                <br/>
                <h1>Suitable Equipment For Home Use</h1>
                <div class="container">
                <div class="card">
                            <div class="card-header">
                                <img src={rband} alt="rover" />
                                </div>
                                <div class="card-body">
                                <span class="tag tag-mint"><strong>Resistance Training</strong></span>
                                <h4>
                                <ul>
                                    <li>Lightweight</li>
                                    <li>Tone and strengthen</li>
                                    <li>Protects bones and joints</li>
                                    <br/>
                                </ul>
                                </h4>
                                <p>
                                Email us for more information!
                                <br/><br/>
                                <form ref={form} onSubmit={sendEmail}>
                                <input className="input1" type="email" placeholder="Enter Email"></input>
                                <input type="submit" class="bt"></input>
                                </form>
                                
                                </p>
                                
                            
                        </div>

                        
                    </div>

                    <div class="card">
                            <div class="card-header">
                                <img src={dumbbell} alt="rover" />
                                </div>
                                <div class="card-body">
                                <span class="tag tag-pink"><strong>Weight Training</strong></span>
                                <h4>
                                <ul>
                                    <li>Versatile</li>
                                    <li>inter & intramuscular coordination</li>
                                    <li>Stimulate muscle growth</li>
                                </ul>
                                </h4>
                                <p>
                                Email us for more information!
                                <br/><br/>
                                <form ref={form} onSubmit={sendEmail}>
                                <input className="input1" type="email" placeholder="Enter Email" ></input>
                                <input type="submit" class="bt"></input>
                                </form>
                                </p>
                                </div>
                            
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <img src={abflex} alt="rover" />
                                </div>
                                <div class="card-body">
                                <span class="tag tag-orange"><strong>Core Training</strong></span>
                                <h4>
                                <ul>
                                    <li>Easy to use</li>
                                    <li>Boosts Core Strength & Stability</li>
                                    <li>Better Posture</li>
                                </ul>
                                </h4>
                                <p>
                                Email us for more information!
                                <br/><br/>
                                <form ref={form} onSubmit={sendEmail}>
                                <input className="input1" type="email" placeholder="Enter Email"></input>
                                <input type="submit" class="bt"></input>
                                </form>
                                </p>
                                </div>
                            
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <img src={jumprope} alt="rover" />
                                </div>
                                <div class="card-body">
                                <span class="tag tag-purple"><strong>Cardio Training</strong></span>
                                <h4>
                                <ul>
                                    <li>Promotes Heart Health</li>
                                    <li>Fat Burner</li>
                                    <li>Improved Focus & Coordination</li>
                                </ul>
                                </h4>
                                <p>
                                Email us for more information!
                                <br/><br/>
                                <form ref={form}  onSubmit={sendEmail}>
                                <input className="input1" type="email" placeholder="Enter Email"></input>
                                <input type="submit"  className="bt"></input>
                                </form>
                                </p>
                                </div>
                            
                        </div>
                        
                    
                </div>
                <br/>
            </>)
    }
}


export default Equipment;
