import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class InvestmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        alert('Form was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label for="amountInputId">
                    Investment Amount
                    <input id="amountInputId" name="amount" type="number" value={this.state.amount} onChange={this.handleChange} />
                </label>
                <label for="typeInputId">
                    Investment Type
                    <input id="typeInputId" name="type" type="text" value={this.state.type} onChange={this.handleChange} />
                </label>
                <label for="netWorthInputId">
                    Total Net Worth
                    <input id="netWorthInputId" name="netWorth" type="number" value={this.state.netWorth} onChange={this.handleChange} />
                </label>
                <label for="incomeInputId">
                    User Estimated Yearly Income
                    <input id="incomeInputId" name="income" type="number" value={this.state.income} onChange={this.handleChange} />
                </label>
                <label for="creditScoreInputId">
                    User Estimated Credit Score
                    <input id="creditScoreInputId" name="creditScore" type="number" value={this.state.creditScore} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <InvestmentForm />,
    document.getElementById('root')
);
