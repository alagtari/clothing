import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {MdOutlineCheckCircle} from 'react-icons/md'

function Itemdetails({item}) {
    const [selectedSize,setSelectedSize] = useState(null)
    const [show, setShow] = useState(false);
    const [BtnText,setBtnText] = useState("AJOUTER AU PANIER")
    return ( 
        <div className="details">
         <div className="details_image" align="center">
         <img src={process.env.PUBLIC_URL+item.image} className='detail_image'/>
         </div>
         <div className="details_controls">
             <div className="detail_title">{item.name}</div>
             <div className="detail_price">{item.price} TND</div>
             <div className="detail_taille">Sélectionne une taille</div>
             <div className="detail_size"  >
                <div 
                className={item.sizes.find(element => element==='xs')?(selectedSize ==='xs'?"size slected_size":"size"):"size disabled"}
                onClick={()=>{
                    if (item.sizes.find(element => element==='xs')) {
                        setSelectedSize('xs') 
                    }
                }}
                align="center">XS</div>
                <div 
                className={item.sizes.find(element => element==='s')?(selectedSize ==='s'?"size slected_size":"size"):"size disabled"}
                onClick={()=>{
                    if (item.sizes.find(element => element==='s')) {
                        setSelectedSize('s') 
                    }
                }}
                align="center">S</div>
                <div 
                className={item.sizes.find(element => element==='m')?(selectedSize ==='m'?"size slected_size":"size"):"size disabled"}
                onClick={()=>{
                    if (item.sizes.find(element => element==='m')) {
                        setSelectedSize('m') 
                    }
                }}
                align="center">M</div>
                <div 
                className={item.sizes.find(element => element==='l')?(selectedSize ==='l'?"size slected_size":"size"):"size disabled"}
                onClick={()=>{
                    if (item.sizes.find(element => element==='l')) {
                        setSelectedSize('l') 
                    }
                }}
                align="center">L</div>
                <div 
                className={item.sizes.find(element => element==='xl')?(selectedSize ==='xl'?"size slected_size":"size"):"size disabled"}
                onClick={()=>{
                    if (item.sizes.find(element => element==='xl')) {
                        setSelectedSize('xl') 
                    }
                }}
                align="center">XL</div>
                <div 
                className={item.sizes.find(element => element==='xxl')?(selectedSize ==='xxl'?"size slected_size":"size"):"size disabled"}
                onClick={()=>{
                    if (item.sizes.find(element => element==='xxl')) {
                        setSelectedSize('xxl') 
                    }
                }}
                align="center">XXL</div>
             </div>
          <div 
          className='dtails_button'
          onMouseOver={()=>{
            !selectedSize&&setBtnText("SELECTIONNE UNE TAILLE")
          }}
          onMouseOut={()=>{
            setBtnText("AJOUTER AU PANIER")
         }}
         onClick={()=>{
           if (selectedSize) 
           { if (localStorage.getItem('shop')) {
                let shop = JSON.parse(localStorage.getItem('shop'))
                item.size = selectedSize
                item.idshop = Math.floor(Math.random() * 10000000);
                item.quantity = 1
                shop.push(item)
                localStorage.setItem('shop',JSON.stringify(shop)) 
                setShow(true)
              } else {
                let shop =[]
                item.size = selectedSize
                item.idshop = Math.floor(Math.random() * 10000000);
                item.quantity = 1
                shop.push(item)
                localStorage.setItem('shop',JSON.stringify(shop))
              }}
         }}
          align='center'>
         {BtnText}
         </div>
         </div>
         <ToastContainer className="p-3" position={'top-end'} >
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
            <Toast.Header>
                <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
                />
                <strong className="me-auto"></strong>
                <small>il y a 1 seconde</small>
            </Toast.Header>
            <Toast.Body>Ajouté au panier <MdOutlineCheckCircle color='	#32CD32' size={18}/></Toast.Body>
            </Toast>
         </ToastContainer>
         

        </div>
     );
}

export default Itemdetails;