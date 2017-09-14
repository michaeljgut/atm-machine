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
  }

  handleWithdraw(event) {
    event.preventDefault();
    const newBalance = this.state.balance - this.state.inputValue;
    if (newBalance < 0){
      alert('Insufficient funds!');
    }
    this.setState((prevState) =>{
      return {balance: prevState.balance - this.state.inputValue};
    })

  }

  handleValue(event) {
    event.preventDefault();
    if (event.target.value === '-'){
      alert('Cannot have a negative number!');
      return;
    }
    const regex = /[^0-9]/g;
    if (regex.test(event.target.value)) {
      alert('Invalid number');
      return;
    }
    this.setState({
      inputValue: Number(event.target.value)
    })
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
        <input value={this.state.inputBalance} onChange={this.handleValue}/>
        <button onClick={this.handleDeposit}>Deposit</button>
        <button onClick={this.handleWithdraw}>Withdraw</button>
      </div>
    )
  }
}

export default Account;
