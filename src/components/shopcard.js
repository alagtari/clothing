import {RiDeleteBinLine} from 'react-icons/ri'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import { useState} from 'react';

import Editshopcard from './editshopcard'
function Shopcard({calcuateTotalePrice}) {
    const shopitems = JSON.parse(localStorage.getItem('shop'))
    const [showedit, setShowedit] = useState(false);
    const [items, setItems] = useState(shopitems);
    const handleCloseedit = () => {setShowedit(false);
                                   calcuateTotalePrice();}
    const handleShowedit = () => setShowedit(true);
    return ( 
    <>
    {items.map((item,index)=>
    <div
    className="shop_card" key={index}>
        <div className='shop_image' align='center'>
          <img src={process.env.PUBLIC_URL+item.image} width={100}/>  
        </div>
        <div className=''>
            <div className="shop_item_price">{(Math.round(item.price*item.quantity*100)/100).toFixed(2)} TND 
            <MdOutlineModeEditOutline onClick={handleShowedit} className='shop_icon' size={25}/>
            <RiDeleteBinLine className='shop_icon' size={25}
            onClick={()=>{
                let shop = JSON.parse(localStorage.getItem('shop'))
                shop = shop.filter(shopitem => shopitem.idshop !== item.idshop)
                setItems(shop)
                localStorage.setItem('shop',JSON.stringify(shop)) 
            }
            }
            /></div>
            <div className="shop_item_title">{item.name}</div>
            <div className="shop_item_infos">
                <span className='shop_item_info'>{item.size}</span>
                <span className='shop_item_info'>{item.quantity}x</span>
                <span className='shop_item_info'>{item.price} TND</span>
            </div>
            
        </div>
        <Editshopcard item={item} show={showedit} handleClose={handleCloseedit} />
     </div>
     )}
     </> 
    );
}

export default Shopcard;