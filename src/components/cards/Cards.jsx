import {useState, useEffect} from 'react'
import axios from 'axios'
import CardsList from './cardsList'

const Cards = () => {
  const [product, setProducts] = useState();
  const [currentIthem, setCurrentIthem] = useState();
    const fetchProdutList = () => {   
  
  try {
       axios.get('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e').then(function (response) {
    return response
  })
    .then(function (data) {
      setProducts(data.data)
        
  })
  .catch(function (error) {
    console.log('error', error)
  })
      
    } catch (error) {}
         }

    useEffect(() => {  
    fetchProdutList()
       },[])
      
  const onCurrentIthem = (cart) => {
         setCurrentIthem(cart)
       }
   console.log(currentIthem)
    return (
      <CardsList prop={product} onClick={onCurrentIthem}/>
            

    )
}

 export default Cards