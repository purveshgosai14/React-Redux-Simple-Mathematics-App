import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';

class Number extends Component {
    render() {
        return(
            <div>
            <div className="row col-sm-offset-5">
                <p>0</p>
            </div>
                <div className="row col-sm-offset-4">
                    <Button bsStyle="primary">Increment</Button>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('mapStateToProps - Number.js', state);
    return{
    num:state.num,
    }
}

export default connect(mapStateToProps, null)(Number);