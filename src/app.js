import React from 'react';
import { InvestmentForm } from './components/InvestmentForm';
import { LorumIpsumBlock } from './components/LorumIpsumBlock'

export class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2 class="header">Pre Approved Investing!</h2>
                </div>
                <div>
                    <InvestmentForm />
                    <LorumIpsumBlock />
                </div>
            </div>
        );
    }
}
