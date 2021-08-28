import React from 'react';

export class InvestmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: null,
            type: '',
            netWorth: null,
            income: null,
            creditScore: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        alert('Form was submitted: ');
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
                    <input id="creditScoreInputId" name="creditScore" type="number" min="300" max="850" value={this.state.creditScore} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
