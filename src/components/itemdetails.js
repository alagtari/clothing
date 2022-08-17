import { useState } from 'react';
function Itemdetails({item}) {
    const [selectedSize,setSelectedSize] = useState(null)
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
        </div>
     );
}

export default Itemdetails;