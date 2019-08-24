import React from 'react';

const Slider=()=>(
    <div className="carousel">
    <div className="carousel-inner">
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="true" checked="checked"></input>
        <div className="carousel-item">
            <a href='#'>
            <div className='divtext'>THE FRESH FOAM CRUZ</div>
            <div className='divtext1'><p>COMFORT.SPORT.STYLE.</p></div>
            <img src="https://i.ibb.co/JsLWTqq/rsz-fashionable-girl-1382946.jpg">
                
            </img>
            </a>
        </div>
        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true" ></input>
        <div className="carousel-item">
            
            <img src="https://i.ibb.co/2qsM5qL/image.jpg">
                    
            </img>
            
        </div>
        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true" ></input>
        <div className="carousel-item">
            <img src="https://i.ibb.co/0VCbSLk/image2.jpg"></img>
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