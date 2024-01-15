import React, { Component } from 'react';
import './ImageGrid.css'

class ImageGrid extends Component {
    render() {
        return (
            <div className = 'Cat-splash-div'>
                {/* <img src = '/Homepage/cat1.jpeg' alt = 'cat 1' className = 'Cat-splash-img'/>
                <img src = '/Homepage/cat2.jpeg' alt = 'cat 2' className = 'Cat-splash-img'/>
                <img src = '/Homepage/cat3.jpeg' alt = 'cat 3' className = 'Cat-splash-img'/>
                <img src = '/Homepage/cat4.jpeg' alt = 'cat 4' className = 'Cat-splash-img'/> */}

                
                <img src = '/Homepage/cat1.jpeg' alt = 'cat 1' className = 'Cat-splash-img'/>
                <img src = '/Homepage/cat2.jpeg' alt = 'cat 2' className = 'Cat-splash-img'/>
                <img src = '/Homepage/cat3.jpeg' alt = 'cat 3' className = 'Cat-splash-img'/>
                <img src = '/Homepage/cat4.jpeg' alt = 'cat 4' className = 'Cat-splash-img'/>
            </div>
        );
    }
}

export default ImageGrid;
