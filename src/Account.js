import React, {Component} from 'react';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      inputValue: 0
    }
    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleWithdraw = this.handleWithdraw.bind(this);
    this.handleValue = this.handleValue.bind(this);
  }

  handleDeposit(event) {
    event.preventDefault();
    this.setState((prevState) =>{
      return {balance: prevState.balance + this.state.inputValue};
    })
  }

  handleWithdraw(event) {
    event.preventDefault();
    this.setState((prevState) =>{
      return {balance: prevState.balance - this.state.inputValue};
    })

  }

  handleValue(event) {
    event.preventDefault();
    this.setState({
      inputValue: Number(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.state.balance}</h3>
        <input value={this.state.inputBalance} onChange={this.handleValue}/>
        <button onClick={this.handleDeposit}>Deposit</button>
        <button onClick={this.handleWithdraw}>Withdraw</button>
      </div>
    )
  }
}

export default Account;
