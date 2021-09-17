class modal extends Component{
  
    componentDidMount() {
      window.addEventListener('keydown', this.hendleKeyDown);
      
    }
    
    componentWillUnmount() {
      window.removeEventListener('keydown', this.hendleKeyDown);
    }
  
    hendleKeyDown = e => {
      if (e.code === 'Escape') {
         this.props.onClose()
       }
      
    }
  
    hendleBackdropClick = e => {
      if (e.currentTarget === e.target) {
        this.props.onClose()
      }
    }
  render(){
    const { url, tittel = '' } = this.props;
    
    return (
      <div className = { s.Overlay } onClick={this.hendleBackdropClick}>
        <div className = { s.Modal }>
        <p>{prop.category}</p>
              <h2>{prop.name}</h2>
              <p>{prop.price}</p>
        <form>
            <input type="text" />
            <input type="text" />
        </form>

        </div>
      </div>)}
    
  }
  
    
  
  export default  modal