import React from "react";
import './PricingStyles.css'
import ContactForm from "../components/ContactForm";
class Pricing extends React.Component
{
    render()
    {
        return(<>
        <br/>
        <h2>Our Plans!</h2>
            <div className="plans">
                <ul className="tiers">
                    <li class='header'>Basic</li>
                    <li className="feature">Access to all videos</li>
                    <li className="feature"><b>Basic</b> Diet Plans</li>
                    <li className="feature"><i class="fa-sharp fa-solid fa-xmark price1"></i></li>
                    <li ><b className="price">$100/month</b></li>
                </ul>
            </div>
            <div className="plans">
                <ul className="tiers">
                    <li class='header'>Pro</li>
                    <li className="feature">Access to all videos</li>
                    <li className="feature"><b>Customised</b> Diet Plans</li>
                    <li className="feature"><b>24x7</b> Live Chat</li>
                    <li ><b className="price">$150/month</b></li>
                </ul>
            </div>
            <div className="custom_plan">
            <ContactForm/>
            <br/>
            </div>
        </>)
    }
}

export default Pricing; 