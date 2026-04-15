import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : c
    );
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = this.state.counters.map((c) =>
      c.id === counter.id && c.value > 0
        ? { ...c, value: c.value - 1 }
        : c
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => ({
      ...c,
      value: 0,
    }));
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (c) => c.id !== counterId
    );
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    const activeCount = this.state.counters.filter(
      (c) => c.value > 0
    ).length;

    return (
      <div className="main__wrap">
        <main className="container">

          {/* 🔥 Deployment Test Banner */}
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <h2 style={{ fontWeight: "bold" }}>
              👋 Hello *CTG-DevOps DEV-7  - Deployment Working ✅
            </h2>
            <h5>Version: v1.0.1 🚀</h5>
          </div>

          <div className="card__box">
            <NavBar totalCounters={activeCount} />

            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onRestart={this.handleRestart}
            />
          </div>

        </main>
      </div>
    );
  }
}

export default App;