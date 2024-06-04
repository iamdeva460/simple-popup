import React from 'react';
import './style.css'

class Popup extends React.Component{
    render(){
        return(
            <div className='popup'>
                 <div className='popup-inner'>
                     <h3 className='text1'>{this.props.text}</h3>
                     <h1 className='text2'>WELCOME    {this.props.value} </h1>
            <div className='div'>
                <button className='button1' onClick={this.props.closePopup}> Close Me </button>
            </div>
                 </div>
            </div>
        )
    }
}

export default Popup;
