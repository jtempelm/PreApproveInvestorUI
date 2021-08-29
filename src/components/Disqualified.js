import React from 'react';
import { withRouter } from 'react-router-dom';

class Disqualified extends React.Component {
    render() {
        return (
            <div className="notApproved">
                <div>
                    <span>
                        Sorry, you are Not Approved™
                    </span>
                    <br />
                    <span>¯\_(ツ)_/¯ </span>
                </div>
                <div className="errorMessage">
                    <span >
                        {this.props.location.pathname.split('/')[2]} {/*yes I know this is wrong, but passing props to routes is complicated*/}
                    </span>
                </div>
                <div className="errorMessage">
                    <span >
                        Contact Customer service at 1-999-999-9999
                    </span>
                </div>
            </div>
        );
    }
}

export default withRouter(Disqualified)