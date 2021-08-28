import React from 'react';
import { Route } from 'react-router-dom';
import { UserForm } from './UserForm';

export class InvestmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: null,
            type: '',
            netWorth: null,
            income: null,
            creditScore: null,
            preApprovedResponse: null,
            isApproved: false
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
        var results = "Generic you are not approved m8"
        // fetch('https://example.com/api/preApprovalCheck')
        //     .then(resp => resp.json())
        //     .then(resp => {
        //         const errorMessage = resp.errorMessage;
        //         const isApproved = resp.isApproved;
        //         this.setState({ [isApproved]: isApproved })
        //     })

        isApproved = this.checkApproval();

        if (isApproved) {
            Route(UserForm)
        } else {
            Route(Disqualified(results))
        }

        event.preventDefault();
    }

    checkApproval() { //clearly this business logic would also exist in the API, since clients cannot be trusted, we check it here to reduce the propagation of bad data
        if (
            (this.state.amount > ((1 / 5) * this.state.income)) || //more than 1/5th of their Yearly Income
            (this.state.creditScore < 600) || //Estimated Credit is below 600
            (this.state.amount > (0.03 * this.state.netWorth)) || //Investment Amount is more than 3% of their Total Net Worth
            (this.state.amount > 9_000_000)
        ) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div class="formContainer">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <span>
                            <label for="amountInputId">Investment Amount</label>
                        </span>
                        <input id="amountInputId" name="amount" type="number" value={this.state.amount} onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label for="typeInputId">Investment Type</label>
                        <input id="typeInputId" name="type" type="text" value={this.state.type} onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label for="netWorthInputId">Total Net Worth</label>
                        <input id="netWorthInputId" name="netWorth" type="number" value={this.state.netWorth} onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label for="incomeInputId">User Estimated Yearly Income</label>
                        <input id="incomeInputId" name="income" type="number" value={this.state.income} onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label for="creditScoreInputId">User Estimated Credit Score</label>
                        <input id="creditScoreInputId" name="creditScore" type="number" min="300" max="850" value={this.state.creditScore} onChange={this.handleChange} required />
                    </div>

                    <div class="submitButton">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}
