import React, {Component} from 'react';
import './Account.css';

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
    this.setState({inputValue: 0});
  }

  handleWithdraw(event) {
    event.preventDefault();
    const newBalance = this.state.balance - this.state.inputValue;
    if (newBalance < 0){
      alert('Insufficient funds!');
    } else {
      this.setState((prevState) =>{
        return {balance: prevState.balance - this.state.inputValue};
      })
    }
  }

  handleValue(event) {
    event.preventDefault();
    const num = parseFloat(event.target.value);
    if (isNaN(num) || (typeof num !== 'number') || num < 0) {
      alert('Invalid number');
      this.setState({
        inputValue: event.target.value.substr(0,event.target.value.length - 1)
      })
    } else {
      const tempNum = num * 100
      this.setState({
        inputValue: Math.round(tempNum)/100
      })
    }
  }

  addClass() {
    if (this.state.balance === 0)
      return 'balance zero';
    else
      return 'balance';
  }

  render() {
    return (
      <div >
        <h2>{this.props.name}</h2>
        <div className={this.addClass()}>
          <h3>{this.state.balance}</h3>
        </div>
        <input min="0" onChange={this.handleValue}/>
        <button onClick={this.handleDeposit}>Deposit</button>
        <button onClick={this.handleWithdraw}>Withdraw</button>
      </div>
    )
  }
}

export default Account;
