import {useEffect, useState} from 'react';
import {CgHeart, CgShoppingBag } from "react-icons/cg";
import {AiOutlineUser } from "react-icons/ai";
import {  Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Shopcard from './shopcard';
import { motion  } from "framer-motion";

function Navbar({gender,changeGender,showGender,categories,setSelectedcategory,selectedcategory}) {
    
    const [scrolled, setScrolled] = useState(false);
    const [show, setShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const shoplist = JSON.parse(localStorage.getItem('shop'))

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const calcuateTotalePrice = () => {
        let total = 0;
        shoplist.forEach(element => {
           total += element.quantity*element.price
        });

        setTotalPrice((Math.round(total*100)/100).toFixed(2))
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 120) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });
    }, []);

    useEffect(() => {
        calcuateTotalePrice()
    }, [show]);
    return ( 
        <motion.div
        initial={{
          opacity:0,
          y:-50
        }} 
        whileInView={{
          opacity:1,
          y:0,
          transition:{duration:0.7}
        }}
        
        className={scrolled?'navbar navbar_onscroll':'navbar '}>
            <div className="part1">
            <Link className="brand_name" to="/">Shoes Extra</Link>
            {scrolled?
            <>
            <span
            style={selectedcategory ==="toutes"?{fontWeight:700}:{fontWeight:300} } 
            className="categorie"
            onClick={()=>{
                setSelectedcategory("toutes")
            }}
            >
            Toutes</span>
            {categories.map((element,index)=>
            <span
            style={selectedcategory === element?{fontWeight:700}:{fontWeight:300} }
            className="categorie"
            onClick={()=>{
                 setSelectedcategory(element)
             }}
             key={index}>{element}
             </span>)}
           
             </>:
            showGender&&<>
            <span
            className={gender==='H'?"active_gender":"inactive_gender"}
            onClick={()=>{
                changeGender('H')
            }}
            >Homme</span>
            <span 
            className={gender==='F'?"active_gender":"inactive_gender"}
            onClick={()=>{
                changeGender('F')
            }}
            >Femme</span>
            </>
        }
            </div>
            
            <div className="part2" >
            <AiOutlineUser size={25} className='icons'></AiOutlineUser>
            <Link to="/liked"><CgHeart size={25} className='icons'/></Link>
             <CgShoppingBag size={25} className='icons'onClick={handleShow}/>

             <Offcanvas placement={'end'} show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Mon panier ({shoplist.length})</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='shop_cards'>
                      <Shopcard calcuateTotalePrice={calcuateTotalePrice}/>
                    </div>
                    <div className='shop_bottom' align='center'>
                      <div className='shop_infos' align='center'>
                          <span className='shop_info'>Total</span>
                          <span>{totalPrice} TND</span>
                      </div>
                      <div className='shop_button' align='center'>
                          PASSER COMMANDE
                      </div>
                    </div> 

               </Offcanvas.Body>
             </Offcanvas>
            </div>
            
        </motion.div>
     );
}

export default Navbar;