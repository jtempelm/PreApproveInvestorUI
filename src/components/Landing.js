import React from 'react';
import InvestmentForm from './InvestmentForm';
import { LorumIpsumBlock } from './LorumIpsumBlock'
import { Comic } from './Comic'
import { withRouter } from 'react-router-dom';

class Landing extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2 className="center">Pre Approved Investing!</h2>
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

export default withRouter(Landing)