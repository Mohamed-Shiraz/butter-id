import React, { Component } from 'react';
import ImageGrid from './ImageGrid/ImageGrid';
import ContactDetails from './ContactDetails/ContactDetails';
import KittySvg from './KittySvg/KittySvg';
import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
        <div className='Cat-splash'>

            <header className='Cat-splash-header'>
                Hi! My name is Butter!
            </header>
            <KittySvg className = 'Kitty-svg'/>

            <ImageGrid />
            <ContactDetails />
        </div>
        );
    }
}

export default Homepage;
