


const CardsList = (items) => {
const props = items.prop
  

    return (
        console.log(items.prop),
        
        <ul className=''>
        {props.length>0&&props.map((prop) => (
          <li key={prop.name} className=''>
              <p>{prop.category}</p>
              <h2>{prop.name}</h2>
              <p>{prop.price}</p>

            <button
            type="button"
            onClick=''
            className=''
          >
            <span className=''>BUY</span>
          </button>
        </li>
      ))}
    </ul>
    
    )}

    export default CardsList




