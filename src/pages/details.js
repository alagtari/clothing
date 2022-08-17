import Itemdetails from "../components/itemdetails";
import Navbar from "../components/navbar";
import itemslist from "../data/items.json";
import { useParams } from 'react-router-dom';

function Details() {
    const params = useParams()
    const item = itemslist.find(element => (element.id == params.id))
    return ( 
    <>
     <Navbar showGender={false}/>
     <Itemdetails item={item}/>
    </> 
    );
}

export default Details;