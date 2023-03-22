import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  }
  handleDelete = () => {

    this.setState({ value: this.state.value + 1 });
  }

  getBadgeClasses = () => "number badge badge-" + (this.state.value === 0 ? 'warning' : 'primary');

  formatvalue = () => {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }

  render() {

    return (

      <div>
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>

        <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>
          Increment </button>

        <button className="btn btn-danger btn-sm m-2" onClick={this.handleDelete}>
          Delete </button>
      </div>

    );
  }
}

export default Counter;
