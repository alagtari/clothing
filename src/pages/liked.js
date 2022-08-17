import Items from '../components/items';
import Navbar from '../components/navbar';

import { useState,useEffect } from 'react';
function Liked() {
  const [gender, setGender] = useState('H');
  const [categories, setCategories] = useState(null);
  const [selectedcategory, setSelectedcategory] = useState('toutes');
  let likeditems = JSON.parse(localStorage.getItem('liked'))
  const [items, setItems] = useState(likeditems );
  useEffect(()=>{
    
    let itemsList = []
    likeditems.forEach(element =>{
      if (element.gender === gender &&element.category === selectedcategory) {
        itemsList.push(element)
      }
  });
  if (selectedcategory === 'toutes') {
    likeditems.forEach(element =>{
      if (element.gender === gender) {
        itemsList.push(element)
      }
  });
  }
  setItems(itemsList)
     
  },[gender,selectedcategory])


  useEffect(()=>{
    let categoriesList = []
    likeditems.forEach(element =>{
      if (element.gender === gender &&!categoriesList.find(category => category === element.category)) {
       categoriesList.push(element.category)
      }
  });
  
  setCategories(categoriesList)
  },[items])

  useEffect(()=>{
    setSelectedcategory('toutes')
  },[gender])


const selectCategory=(value)=>{
    setSelectedcategory(value)
  }
const changeGender =(gender)=>{
    setGender(gender)
  }

    return ( 
    <>
      <Navbar gender={gender} changeGender={changeGender} showGender={true} categories={categories} setSelectedcategory={selectCategory} selectedcategory={selectedcategory}/>
      <Items gender={gender} items={items} />
    </>
     );
}

export default Liked;