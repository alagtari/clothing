import { motion  } from "framer-motion";

function Size({sizes}) {
    return ( 
        <motion.div 
        initial={{
         opacity:0
       }} viewport={{once:true}}
       whileInView={{
         opacity:1,
         transition:{duration:0.5 }
       }}
       exit={{
         opacity:0,
         y:-100
       }}
        className="size_box" 
        align="center">
         <h5 className="boxtext" >Selectionner un taille</h5>
         <div className="size_line" align="center">
            <div className={sizes.find(element => element==='xs')?"size":"size disabled"}>XS</div>
            <div className={sizes.find(element => element==='s')?"size":"size disabled"}>S</div>
            <div className={sizes.find(element => element==='m')?"size":"size disabled"}>M</div>
            <div className={sizes.find(element => element==='l')?"size":"size disabled"}>L</div>
            <div className={sizes.find(element => element==='xl')?"size":"size disabled"}>XL</div>
            <div className={sizes.find(element => element==='xxl')?"size":"size disabled"}>XXL</div>

         </div>
        </motion.div>
     );
}

export default Size;