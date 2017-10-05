import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementNumber } from '../actions/index'

class Number extends Component {
    render() {
        console.log('from the props', this.props);
        return(
            <div>
            <div className="row col-sm-offset-5">
                <p>{this.props.num}</p>
            </div>
                <div className="row col-sm-offset-4">
                    <Button bsStyle="primary" onClick={()=>this.props.incrementNumber(this.props.num)}>Increment</Button>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('mapStateToProps - Number.js', state);
    return{
    num: state.num
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({incrementNumber}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Number);