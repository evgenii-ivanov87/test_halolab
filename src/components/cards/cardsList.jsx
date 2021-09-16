


const CardsList = (items) => {

  
    return (
        console.log(items),

        <ul className=''>
        {items.length>0&&items.map((item) => (
          <li key={item.name} className=''>
              <p>{item.category}</p>
              <h2>{item.name}</h2>
              <p>{item.price}</p>

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




