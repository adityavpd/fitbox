import React from "react"
import { Link } from "react-router-dom";
import './HomeStyles.css'
import homeimage from '../resources/homepage.jpg'
class Home extends React.Component

{
    render()
    {
        return(
        <div className="main">
                <h1>Welcome To FitBox!</h1>
                <h4>Excercise The Right Way!</h4>
                <Link to="/Excercises" className="bt1">Get Started!</Link>
                <h2>Our Testimonials</h2><br/>
                <figure className="tm1">
                <figcaption>
                    <blockquote>
                    <p><br/>Helped me get my confidence back, A must buy!</p>
                    </blockquote>
                    <h3>Rajesh Khanna</h3>
                    <h4>Software Engineer</h4>
                </figcaption>
                </figure>
                <figure className="tm1">
                <figcaption>
                    <blockquote>
                    <p><br/>I feel like a new person! Easy to follow the plans!</p>
                    </blockquote>
                    <h3>Chavi Gupta</h3>
                    <h4>Homemaker</h4>
                </figcaption>
                </figure>
                <figure className="tm1">
                <figcaption>
                    <blockquote>
                    <p><br/>Changed my life! All my friends are using it too!</p>
                    </blockquote>
                    <h3>Ram Mohan</h3>
                    <h4>Architect</h4>
                </figcaption>
                </figure>
                                
        </div>)
    }
}

export default Home;




