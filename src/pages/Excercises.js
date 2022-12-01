import React from "react";
import "./ExcercisesStyles.css"
import pendlayimg from "../resources/pendlay.jpg";
import dbfly from "../resources/dbfly.jpg"
import latraise from "../resources/latraise.jpg"
class Excercises extends React.Component
{
    render()
    {
        return(
        <>
        <br/>
             <div id="container">	
	
	<div class="product-details">
		
	<h1>Pendlay Row</h1>
	
			<p class="information">Developed by Olympic weightlifting coach Glenn Pendlay, the Pendlay row is a bodybuilding exercise that activates muscle groups throughout your body—including your lats, rhomboids, biceps, glutes, hamstrings, and rear deltoids.</p>

		
		

</div>
	
<div class="product-image">
	
	<img src={pendlayimg} alt=""/>
	

<div class="info">
	<h2> About</h2>
	<ul>
		<li><strong>Target : </strong>Back Muscles</li>
		<li><strong>Reccomended Sets : </strong>4</li>
		<li><strong>Reccomended RepRange : </strong>12-15</li>
		
	</ul>
</div>
</div>

</div>
<div id="container">	
	
	<div class="product-details">
		
	<h1>Dumbbell Fly</h1>
	
			<p class="information">The dumbbell fly utilizes a chest fly movement pattern to isolate the muscles fo the chest to better help the muscles grow and become stronger.The movement itself can be used to help build a stronger bench press but isn’t typically thought of from an increased performance stand-point.</p>

		
		

</div>
	
<div class="product-image">
	
	<img src={dbfly} alt=""/>
	

<div class="info">
	<h2> About</h2>
	<ul>
		<li><strong>Target : </strong>Chest Muscles</li>
		<li><strong>Reccomended Sets : </strong>3</li>
		<li><strong>Reccomended RepRange : </strong>10-12</li>
		
	</ul>
</div>
</div>

</div>

<div id="container">	
	
	<div class="product-details">
		
	<h1>Lateral Raise</h1>
	
			<p class="information">The dumbbell lateral raise is an upper body isolation exercise for building shoulder strength and muscle. It's a staple strength training move and is a great option for accessory work on upper body training days. This exercise particularly focuses on the lateral or medial head of the deltoid, making them appear wider and more developed.</p>

		
		

</div>
	
<div class="product-image">
	
	<img src={latraise} alt=""/>
	

<div class="info">
	<h2> About</h2>
	<ul>
		<li><strong>Target : </strong>Deltoid Muscles</li>
		<li><strong>Reccomended Sets : </strong>4</li>
		<li><strong>Reccomended RepRange : </strong>10-12</li>
		
	</ul>
</div>
</div>

</div>
<br/>
        </>)
    }
}

export default Excercises;