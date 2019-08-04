import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./App.css";
import "typeface-roboto";

const maxNumber = 8;

const symbols = [
  { input: "c", symbol: "C" },
  { input: "s", symbol: "+/-" },
  { input: "p", symbol: "%" }
];
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
const operators = [
  { icon: "+", input: "+" },
  { icon: "-", input: "-" },
  { icon: "÷", input: "/" },
  { icon: "x", input: "*" },
  { icon: "=", input: "=" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "",
      lastValue: "",
      operand: "",
      total: ""
    };
  }

  input(number) {
    const currentValue = this.state.currentValue;
    if (currentValue.length >= maxNumber) {
      return;
    }
    this.setState({
      currentValue: currentValue + number
    });
  }

  operation(operand) {
    if (operand === "=") {
      return this.total();
    }
    if (operand === "s") {
      return this.setState({
        currentValue: -this.state.currentValue
      });
    }
    if (operand === "p") {
      return this.setState({
        currentValue: this.state.currentValue / 100 
      });
    }
    this.setState({
      lastValue: this.state.currentValue,
      currentValue: "",
      operand: operand
    });
  }

  total() {
    if (this.state.lastValue === "" || this.state.currentValue === "") return;
    // eslint-disable-next-line
    const total = eval(
      `${this.state.lastValue} ${this.state.operand} ${this.state.currentValue}`
    );
    this.setState({
      total: total,
      lastValue: "",
      currentValue: total,
      operand: ""
    });
  }

  render() {
    return (
      <Container maxWidth="xs" className="App">
        <h1>Not a Casio</h1>
        <h2>{this.state.error}</h2>
        <TextField
          id="outlined-full-width"
          style={{ margin: 8 }}
          placeholder="0"
          fullWidth
          margin="normal"
          variant="outlined"
          value={this.state.currentValue}
          InputLabelProps={{
            shrink: true
          }}
        />
        <div className="symbols">
          {symbols.map(symbol => (
            <Button
              key={symbol.input}
              onClick={() => this.operation(symbol.input)}
              variant="contained"
              color="primary"
            >
              {symbol.symbol}
            </Button>
          ))}
        </div>
        <div className="operators">
          {operators.map(operator => (
            <Button
              key={operator.input}
              onClick={() => this.operation(operator.input)}
              variant="contained"
              color="secondary"
            >
              {operator.icon}
            </Button>
          ))}
        </div>
        <div className="numbers">
          {numbers.map(number => (
            <Button
              key={number.toString()}
              onClick={() => this.input(number)}
              className={"number_" + number}
              variant="contained"
            >
              {number}
            </Button>
          ))}
        </div>
      </Container>
    );
  }
}

export default App;
