import React, { Component } from 'react';

class Favorites extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div style={{backgroundColor: 'blue', border: '1px solid black'}}>
                <h1>Can you see the FAVORITES?</h1>
            </div>
        )
    }
}

export default Favorites;
