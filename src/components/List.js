import React, { Component } from 'react';
import PostData from '../data.js'

class List extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h1>{PostData.list[0].title}</h1>
            </div>
        );
    }
}

export default List;