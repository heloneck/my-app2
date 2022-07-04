import React from "react";
import card_star from '../images2/card_star.png'
import Data from "./Data";
import card_1 from '../images2/Card_1.png'
import card_2 from '../images2/Card_2.png'
import card_3 from '../images2/Card_3.png'
import App from "./App";

const images = [card_1,card_2,card_3]
let x = 0;
function imagelast() {
    
    if(x===0){
        x=1
        return images[1];
    }else if (x===1){
        x=2
        return images[0];
    }else if (x===2){
        x=0
        return images[2];
    };
};


function Card1(props){
    let item = props.item;

    let spots = ""
    function availablespots(){
        if (item.openSpots === 0){
            spots ="SOLD OUT"
            return true
        }else if (item.location === "Online") {
            spots = "ONLIINE"
            return true
        }else if (item.openSpots === 0 && item.location !== "Online"){
            return false
        }
    }

    //const imagesitems = images[] 
    

    return (
        <div className="">
            <div className="Card__Container__Card__image">
                <img src={imagelast()} alt="" />
                {availablespots() && <div className="Card__Container__Card__image__soldout">{spots}</div>}
                {/* <div className="Card__Container__Card__image__soldout">{availablespots()}</div> */}
                <div className="Card__Container__Card__image__info">
                    <img src={card_star} alt="" />
                    <strong className="text">{item.stats.rating} </strong>
                    <span className="text">({item.stats.reviewCount})-{props.item.country}</span>
                </div>
            </div>
            <div className="Card__Container__Card__info">
                <div>{item.title}</div>
                <div><strong >From ${item.price} </strong>/ person</div>
            </div>
        </div>
    )
}



export default function Card() {
    
    const final = Data.map(item => { 
        return (
            <Card1 
                key= {item.id}
                item={item}
            />
        )
    });
   
    return (
        <div className="Card__Container">
            {final}
        </div>
    )
}

x = 0;


























// export default function Card() {


//     return (
//         <div className="Card__Container">
//             <Card1 
//                 img= {card_1}
//                 availabilty = "SOLD OUT"
//                 rating ={5.0}
//                 reviewCount= {6}
//                 country= "USA"
//                 title= "Life Lessons with Katie Zaferes"
//                 price= {136}
//             /> 
//             <Card1 
//                 img= {card_2}
//                 availabilty = "ONLINE"
//                 rating ={5.0}
//                 reviewCount= {30}
//                 country= "USA"
//                 title= "Learn wedding photography"
//                 price= {125}
//             />
//             <Card1 
//                 img= {card_3}
//                 availabilty = ""
//                 rating ={4.8}
//                 reviewCount= {2}
//                 country= "USA"
//                 title= "Group Mountain Biking"
//                 price= {50}
//             />
//         </div>
//     )
// }