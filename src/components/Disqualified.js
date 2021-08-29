import React from 'react';

export class Disqualified extends React.Component {
    render() {
        return (
            <div className="notApproved">
                <div>
                    <span>
                        Sorry, you are Not Approved™
                    </span>
                    <br/>
                    <span>¯\_(ツ)_/¯ </span>
                </div>
                <div>
                    <span>
                        {this.props.errorMessage}
                    </span>
                </div>
            </div>
        );
    }
}
