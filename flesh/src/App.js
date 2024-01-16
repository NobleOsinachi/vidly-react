import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import React, { Component } from 'react';
import Movies from "./components/movies";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  // set state directly, add props as params
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  // called after component is renderd into dom
  // make ajax calls here
  componentDidMount() {
    // ajax call

    // this.setState({ movies });

    // console.log("App Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };


  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    // const counters = this.state.counters.map(c => {
    //     return { ...c, value: 0 };
    // });
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (counterId) => {
    // alert(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  /*
  constructor
  
  rendered
  
  mounted
  
  when a component is rendered, all its children are rendered recursively
  */

  render() {
    // console.log("App Rendered");
    return (
      <React.Fragment>
        <div className="container">
          <Movies />
        </div>

        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />

        <main className="container">

          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />

        </main>
      </React.Fragment >
    );
  }
}

export default App;
