import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
  incrementIfOdd = event => {
    if(this.props.count%2 !== 0){
      this.incrementCount(event);
    }
  };

  incrementCount = event => {
    event.preventDefault();
    this.props.increment(this.props.count)
  }

  incrementAsync = event => {
    setTimeout(() => {
        this.incrementCount(event)
    }, 1000)
  }

  decrementCount = event => {
    event.preventDefault();
    this.props.decrement(this.props.count)
  }

  render() {
    return (
      <p>
        Clicked: {this.props.count} times
        <button onClick={this.incrementCount}>
          +
        </button>
        <button onClick={this.decrementCount}>
          -
        </button>
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        <button onClick={this.incrementAsync}>
          Increment async
        </button> 
      </p>
    );
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement })(Counter);
