import React from 'react';
import images1 from '../images/main.jpg';

const Carousel = () => {
    return (
        <div className="container-fluid">
	<div className="row">
		<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
  

  
  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img src={images1} alt="main" />
      <div className="carousel-caption">
        
      </div>
    </div>
    
    
  </div>

  
</div>
	</div>
</div>
    );
}

export default Carousel;
