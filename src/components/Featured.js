import React from 'react';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import $ from 'jquery';
window.$ = $;
const Featured =()=>(
    
<div className="container2">
        <section className="featuredm-module">
            
            <div className="featuredm featuredm-one">
                <span className="headline">SHIRTS &amp;TOPS</span>
            </div>

            <div className="featuredm featuredm-two">
            <span className="headline">IPHONE &amp; ANDROID PHONE CASES</span>
            </div>
            
            <div className="clear-fix"></div>
            
           
            <div className="featuredm featuredm-three">
                <span className="headline">MUGS <br></br> &amp; TEA CUPS</span>
                <button className="shop-btn">SHOP NOW</button>
            </div>

            <div className="featuredm featuredm-four">
                <span className="headline">TACTICAL <br></br> &amp; CAMO HOODIES</span>
                <span className="subline">GACHII &amp; BASS</span>
            </div>
        </section>
    </div>
);
export default Featured;