import React, { Component } from 'react';

/*
Controlled components are a concept in React, a popular JavaScript library for building user interfaces. In React, a controlled component is a form element (such as an input, textarea, or select) whose value is controlled by React state.

The main purpose of using controlled components is to have full control and visibility over the state and behavior of form inputs. Here are some benefits and use cases of controlled components:

1. State synchronization: By using controlled components, you can synchronize the value of an input element with the state in your React component. This means that the value of the input is always derived from the component's state, and any changes to the input value are immediately reflected in the component's state.

2. Validation and error handling: Controlled components allow you to easily implement form validation and error handling logic. You can validate the input value in response to user actions or form submissions and display error messages accordingly.

3. Interactivity and event handling: Controlled components give you the flexibility to handle user interactions and events precisely. You can define event handlers to respond to changes in the input value, key presses, focus events, and other user actions, allowing you to control and manipulate the input behavior as needed.

4. Single source of truth: Since the value of a controlled component is always derived from the component's state, there is a single source of truth for the input value. This makes it easier to manage and synchronize multiple form inputs and maintain consistency throughout your application.

5. Testability: Controlled components are generally easier to test compared to uncontrolled components. Since the input values are controlled by React state, you can write tests that simulate user interactions by programmatically changing the state and asserting the expected behavior.

It's important to note that using controlled components comes with some additional code overhead compared to uncontrolled components. You need to manage the state and update it appropriately based on user interactions. However, the benefits of increased control, synchronization, and flexibility make controlled components a preferred approach in many scenarios, especially for complex forms or applications that require precise control over form inputs.
*/
class Counter extends Component {
    /*
     state = {
         value: this.props.value
     };
 
     handleIncrement = () => {
         this.setState({ value: this.state.value + 1 });
     };
 
     handleDecrement = () => {
         this.setState({ value: this.state.value - 1 });
     };
    */

    getBadgeClasses = () => {
        return "badge badge-primary";
    };

    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    };

    //Called immediately before a component is destroyed or removed form the DOM
    // Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in component
    // removes timers toprevent memory leaks
    componentWillUnmount() {
        console.log("Counter - Unmounted");
    }


    render() {
        return (
            <div className="row">

                <div className="col-1">

                    <span className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>
                <div className="col">
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary btn-sm"
                    >
                        +
                    </button>

                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className="btn btn-secondary btn-sm m-2"
                        disabled={this.props.counter.value === 0 ? "disabled" : ""}
                    >
                        -
                    </button>

                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>

                </div>
            </div>
        );
    }
}

export default Counter;
