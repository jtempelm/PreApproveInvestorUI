import React from 'react';
import { InvestmentForm } from './components/InvestmentForm';
import { LorumIpsumBlock } from './components/LorumIpsumBlock'
import { Comic } from './components/Comic'

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
                    <Comic />
                </div>
            </div>
        );
    }
}
