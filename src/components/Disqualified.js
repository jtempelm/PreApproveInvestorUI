import React from 'react';

export class Disqualified extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: props.errorMessage
        };
    }

    render() {
        return (

            <div class="lorumText">
                <div>
                    <span>
                        Sorry, you are Not Approved™
                    </span>
                </div>
                <div>
                    <span>
                        {this.state.errorMessage}
                    </span>
                </div>
            </div>
        );
    }
}
