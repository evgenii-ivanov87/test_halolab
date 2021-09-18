


const CardsList = (items) => {
const props = items.prop

const onClick = e =>{
<<<<<<< Updated upstream
  const event = Object.assign({},e)
 console.log(event)
=======
 console.dir(this.prop)
>>>>>>> Stashed changes

}
  

    return (
        console.log(items.prop),
        
        <ul className=''>
        {props&&props.map((prop) => (
          <li key={prop.name} onClick={onClick}  className=''>
              <p>{prop.category}</p>
              <h2>{prop.name}</h2>
              <p>{prop.price}</p>

            <button
            type="button"
            className=''  
                      
          >  
            BUY
          </button>
        </li>
      ))}
    </ul>
    
    )}

    export default CardsList




