/* eslint-disable jsx-a11y/alt-text */
import Size from './size';
import {BsSuitHeart,BsSuitHeartFill } from "react-icons/bs";

import { useState } from 'react';
function Card({item}) {
    const [hoverd,setHovred] = useState(false)
    const [liked,setLiked] = useState(item.liked)
    return ( 
        <div
         className="card_by_4"
         align='center'
         onMouseOver={()=>{
           setHovred(true)
         }}
         onMouseOut={()=>{
          setHovred(false)
        }}
         >
          <img src={process.env.PUBLIC_URL+item.image} style={{width:item.category ==='Sans manches'&&'70%'}} className='image'/>
          {hoverd&&<Size sizes={item.sizes}/>}

        {liked?
        <BsSuitHeartFill
        color='red'
         className='like_icon'
         size={25}
         onClick={(e)=>{
          e.stopPropagation();
          let liked = JSON.parse(localStorage.getItem('liked'))
          liked = liked.filter(likeditem => likeditem.id !== item.id)
          localStorage.setItem('liked',JSON.stringify(liked)) 
          setLiked(!liked)
         }}
         />
        :<BsSuitHeart
         className='like_icon'
         size={25}
         onClick={(e)=>{
          e.stopPropagation();
          setLiked(!liked)
          if (localStorage.getItem('liked')) {
            let liked = JSON.parse(localStorage.getItem('liked'))
            item.liked = true
            liked.push(item)
            localStorage.setItem('liked',JSON.stringify(liked)) 
          } else {
            let liked =[]
            item.liked = true
            liked.push(item)
            localStorage.setItem('liked',JSON.stringify(liked))
          }
        }}
         />}
        {item.new&&<span className='badge'>New</span>}  
        </div>
     );
}

export default Card;