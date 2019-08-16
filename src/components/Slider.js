import React from 'react';

const Slider=()=>(
    <div className="carousel">
    <div className="carousel-inner">
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="true" checked="checked"></input>
        <div className="carousel-item">
            
            <h3></h3>
            <img src="/images/bg.jpg">
                
            </img>
        </div>
        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true"></input>
        <div className="carousel-item">
            <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript"></img>
        </div>
        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true"></input>
        <div className="carousel-item">
            <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel"></img>
        </div>
        <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
        <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
        <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
        <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
        <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
        <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
        <ol className="carousel-indicators">
            <li>
                <label htmlFor="carousel-1" className="carousel-bullet">•</label>
            </li>
            <li>
                <label htmlFor="carousel-2" className="carousel-bullet">•</label>
            </li>
            <li>
                <label htmlFor="carousel-3" className="carousel-bullet">•</label>
            </li>
        </ol>
    </div>
</div>


);
export default Slider;