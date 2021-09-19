import React from "react"


const CardsList = (items) => {
const carts = items.prop


const currentIthem = () =>{

  
console.log()
}
  

    return (
        console.log(items.prop),
        
        <ul className=''>
        {carts&&carts.map((cart,index) => (
          <li key={index}   className=''>
              <p>{cart.category}</p>
              <h2>{cart.name}</h2>
              <p>{cart.price}</p>

            <button
            type="button"
            className=''  
            onClick={((e)=>{currentIthem(cart)})}          
          >  
            BUY
          </button>
        </li>
      ))}
    </ul>
    
    )}

    export default CardsList




