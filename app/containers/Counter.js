import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions';

import { counterClass } from '../styles/site.scss';

class Counter extends Component {
    render() {
        let counter = this.props.counter ? this.props.counter : 0;
        return (
            <div className={counterClass}>
                <button onClick={() => this.props.onDecrement(counter)}>-</button>
                {counter}
                <button onClick={() => this.props.onIncrement(counter)}>+</button>
            </div>
        );
    }
}

const mapStateToProps = ({ counter }) => {
    return {
        counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (counter) => {
            dispatch(incrementCounter(counter));
        },
        onDecrement: (counter) => {
            dispatch(decrementCounter(counter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
