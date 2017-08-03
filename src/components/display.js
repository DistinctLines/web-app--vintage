import React, { Component } from 'react';
import DisplayItem from './displayitem';

require('../css/display.scss');

class Display extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const { items } = this.props;

        return(
            <div className="container display">
                <div className="row-display">
                    {
                        items.map((item, index) => {
                            return <DisplayItem key={index} item={item} />
                        })
                    }
                </div>
            </div>
        )
    }

}

export default Display;