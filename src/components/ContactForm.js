import { render } from "@testing-library/react";
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import './FormStyles.css'
function ContactForm()
{   
    
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [telephone , setTelephone] = useState('');

    const handleNameChange =(e)=>{
        setName(e.target.value);
      }
      
      const handleAgeChange =(e)=>{
        setAge(e.target.value);
      }
      
      const handleTelephoneChange =(e)=>{
        setTelephone(e.target.value);
      }
    
      const handleSubmit=(e)=>{
          if(telephone.length!=10)
          {
            alert("Please enter correct phone number");
            e.preventDefault();
          }
          else
          {
            alert("Submitted! We will contact you shortly!\n" + "Name: " + name + "\n Age: " + age + "\nPh No: " + telephone  )
            emailjs.sendForm('service_0mh4pch', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
          }
          
   
      }
    

        render()
        {
            return(
                <>
                <h2>Get In Touch For a Custom Plan!</h2>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <input type='text' placeholder="Enter Your Name" className="input_field" value={name} required onChange={(e)=> {handleNameChange(e)}} ></input>
                    <input type='number' placeholder="Enter Your Age" className="input_field" value={age} required onChange={(e)=> {handleAgeChange(e)}} ></input>
                    <input type='tel' placeholder="Enter Your Phone Number" className="input_field" value={telephone} required onChange={(e)=> {handleTelephoneChange(e)}}  ></input>
                    <br></br>

                    <input type="submit" value="Submit" className="bt1" ></input>
                </form>
                
                </>
            )
            
        }
export default ContactForm;