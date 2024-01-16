import React, { Component } from 'react';
import Counter from "./counter";


class Counters extends Component {


    render() {
        const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;

        return (
            <div>
                <button
                    // onClick={this.props.onReset}
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>

                {this.props.counters.map(counter => (
                    <Counter
                        key={counter.id}

                        // id={counter.id}
                        // value={counter.value}
                        counter={counter}

                        // onDelete={() => this.handleDelete(counter.id)}

                        // onDelete={this.props.onDelete}
                        onDelete={onDelete}

                        // onIncrement={this.props.onIncrement}
                        onIncrement={onIncrement}


                        onDecrement={onDecrement}

                    />
                ))}
            </div>
        );
    }
}

export default Counters;
