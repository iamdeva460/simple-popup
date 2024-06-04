import React, {Component} from 'react';
import Popup from './Components/Popup';
import './App.css'

class App extends Component{

   constructor(props){
    super(props);
    this.state={
      showPopup : false,
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggelPopup = this.toggelPopup.bind(this)
   }
   //handle CHANGE
 handleChange(e){
  this.setState({
    text : e.target.value
  })
}
 //toggelPopUp
toggelPopup(){
  this.setState({
    showPopup:!this.state.showPopup
  })
}

   render(){
    return(
     
      <div>
        
         <label>User Name</label><br/>
         <input type='text' id='i1' onChange={this.handleChange} value={this.state.text} placeholder='UserName..'/><br/>
         <button className='button2' onClick={this.toggelPopup}>Submit</button>
 {this.state.showPopup ? <Popup text="popup message !" 
 closePopup={this.toggelPopup} value={this.state.text}/> : null }

      </div>
    )
   }
}

export default App;
