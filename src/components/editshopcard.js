import Offcanvas from 'react-bootstrap/Offcanvas';
import {RiArrowLeftSLine} from 'react-icons/ri';
import {HiOutlineMinus,HiOutlinePlus} from 'react-icons/hi';
import { useState } from 'react';
function Editshopcard({show,handleClose,item}) {
    const[counter,setCounter] = useState(item.quantity)
    const[selectedSize,setSelectedSize] = useState(item.size)

    return ( 
        <Offcanvas placement={'end'} show={show} onHide={handleClose}>
        <Offcanvas.Header>
        <Offcanvas.Title><RiArrowLeftSLine size={30} onClick={handleClose}/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <div className='shop_image_edit' align='center'>
          <img src={process.env.PUBLIC_URL+item.image} width={180}/>  
        </div>
        <div className='shop_edit_controls'>
          <div className="shop_item_price_edit">{item.price} TND </div>
          <div className="shop_item_title">{item.name}</div>
        </div>
        <div className='shop_edit_controls'>
          <div className="shop_item_price_edit">Taille</div>
          </div>  
          
          <div className='size_line'>
            <div className={selectedSize==='xs'?"size slected_size":"size"}
            onClick={()=>{
                setSelectedSize('xs')
            }}
            align="center">XS</div>
            <div className={selectedSize==='s'?"size slected_size":"size"}
            onClick={()=>{
                setSelectedSize('s')
            }}
            align="center">S</div>
            <div className={selectedSize==='m'?"size slected_size":"size"}
            onClick={()=>{
                setSelectedSize('m')
            }}
            align="center">M</div>
            <div className={selectedSize==='l'?"size slected_size":"size"}
            onClick={()=>{
                setSelectedSize('l')
            }}
            align="center">L</div>
            <div className={selectedSize==='xl'?"size slected_size":"size"}
            onClick={()=>{
                setSelectedSize('xl')
            }}
            align="center">XL</div>
            <div className={selectedSize==='xxl'?"size slected_size":"size"}
            onClick={()=>{
                setSelectedSize('xxl')
            }}
            align="center">XXL</div>
          </div>
         
     
        <div className='shop_edit_controls'>
          <div className="shop_item_price_edit">Quantité</div>
          <div className='quantite' align="center">
              <HiOutlineMinus
              style={counter===0&&{color:"gray"}}
              onClick={()=>{
                counter!==0&&setCounter(counter=>counter-1)
              }}
               size={22}/>
              <span className='quantite_number'>{counter}</span>
              <HiOutlinePlus
              onClick={()=>{
                setCounter(counter=>counter+1)
            }}
               size={22}/>
          </div>
          <div className='edit_bottom' align='center'>
            {counter>0?
             <div className='edit_button'
             onClick={()=>{
               let shoplist = JSON.parse(localStorage.getItem('shop'))
               shoplist.forEach(element => {
                 if (element.id === item.id) {
                   element.size = selectedSize;
                   element.quantity = counter;
                 }
               });
               localStorage.setItem('shop',JSON.stringify(shoplist))
               handleClose()
             }}
             align='center'>
             Enregistrer
             </div>:
             <div className='edit_button'
             onClick={()=>{

             }}
             align='center'>
             Supprimer
             </div>}
        </div>
        </div>
       </Offcanvas.Body>
       </Offcanvas>
     );
}

export default Editshopcard;