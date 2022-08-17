import Card from "./card";
import { useNavigate } from "react-router-dom";
import { motion  } from "framer-motion";

        
function Item({item}) {
    const navigate = useNavigate();
    return ( 
        
        <motion.div
        initial={{
          opacity:0,
          y:100
        }} viewport={{once:true}}
        whileInView={{
          opacity:1,
          y:0,
          transition:{duration:0.7}
        }}
        exit={{
          opacity:0,
          y:-100
        }}
        className="item"
        onClick={()=>navigate(`/details/${item.id}`)}
        >
        <Card item={item}/>
        <div className="item_title">{item.name}</div>
        <div className="item_price">29,99 TND</div>
        </motion.div>
     );
}

export default Item;