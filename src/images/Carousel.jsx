import React from 'react';
import images1 from '../images/main.jpg';

const Carousel = () => {
    return (
        <div classNameName="container-fluid">
	<div classNameName="row">
		<div id="carousel-example-generic" classNameName="carousel slide" data-ride="carousel">
  

  
  <div classNameName="carousel-inner" role="listbox">
    <div classNameName="item active">
      <img src={images1} alt="main" />
      <div classNameName="carousel-caption">
        
      </div>
    </div>
    
    
  </div>

  
</div>
	</div>
</div>
    );
}

export default Carousel;
