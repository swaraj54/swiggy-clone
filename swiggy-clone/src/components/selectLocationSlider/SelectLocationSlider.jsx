import React, { useState } from 'react';
import "./selectSlider.css"

const SelectLocationSlider = () => {

    // const [slider, setSlider] =  useState(true)
    const slider = true;
    return (
        <div className='selectSliderDiv' style={{left : slider ? "0" : "-27vw"}} > 
        <div className="selectSliderContentDiv">

          <h1>Hello world</h1>

        </div>
     </div>
    );
};

export default SelectLocationSlider;
