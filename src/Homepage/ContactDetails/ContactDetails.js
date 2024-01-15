import React, { Component } from 'react';
import './ContactDetails.css'

class ContactDetails extends Component {
    render() {
        return (
        <div className='Contact-Details-Container'>
            <div>
                If you're reading this that means I'm outside chasing mice and pussy. If you find me, please let my parents know!
            </div><br/>
            <div className='Contact-Details'> 
                Mom's number : 9003484716 <br/>
                Dad's number : 8870046752
            </div>
        </div>
        );
    }
}

export default ContactDetails;
