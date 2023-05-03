import React from 'react'

import '../../App.css'
import dataset from './cal'
    
function randomImageID(){
    let datasetSize = dataset.length -1;

    const randomVal = Math.floor((Math.random() * datasetSize));
    return randomVal;
}


const randomVal=randomImageID();
const cap_img_name = dataset[randomVal][0];
const cap_img_text = dataset[randomVal][1];
const cap_img_path="/"+cap_img_name;
function CapImg() {
    
    return (
        
        <div>
            <img src={cap_img_path} id="capt_img" alt='captcha img'/>
            
            <p>
                <label>Captcha Text</label><br/>
                <input type="text" value={cap_img_text} name="captcha_solve" id='capInput' required />
            </p>
        </div>       

    )

}

export default CapImg;
