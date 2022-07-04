import React from "react";

import image_1 from '../images/image_1.png'
import image_2 from '../images/image_2.png'
import image_3 from '../images/image_3.png'
import image_4 from '../images/image_4.png'
import image_5 from '../images/image_5.png'
import image_6 from '../images/image_6.png'
import image_7 from '../images/image_7.png'
import image_8 from '../images/image_8.png'
import image_9 from '../images/image_9.png'



export default function Grid_pic() {
    return (
        <div className="Container__grid">
            <div className="Container__grid_column_1">
                <img src={image_1} alt="" />
            </div>
            <div className="Container__grid_column_2">
                <img src={image_2} alt="" />
                <img src={image_3} alt="" />
            </div>
            <div className="Container__grid_column_3">
                <img src={image_4} alt="" />
                <img src={image_5} alt="" />
            </div>
            <div className="Container__grid_column_4">
                <img src={image_6} alt="" />
                <img src={image_7} alt="" />
            </div>
            <div className="Container__grid_column_5">
                <img src={image_8} alt="" />
                <img src={image_9} alt="" />
            </div>

        </div>
    )
}