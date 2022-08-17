import Item from "./item";
function Items({items}) {

    
    return ( 
        <div className="items">
            {items.map(item => <Item key={item.id+item.gender} item={item}/>) }
        </div>
     );
}

export default Items;