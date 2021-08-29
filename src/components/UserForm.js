import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordReType: ''
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
        if ((/\d/.test(this.state.password) || /[$-/:-?{-~!"^_`[\]]/.test(this.state.password)) && /[a-zA-Z]/.test(this.state.password)) {
            if (this.state.password !== this.state.passwordReType) {
                alert('Passwords must match!');
            } else {
                alert('Form was submitted!');
                this.props.history.push('/Landing')
            }
        } else {
            alert('Password must match the expected format');
        }
        event.preventDefault();
    }
    render() {
        return (
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h2 className="center">Congratulations you are Approved!</h2>
                        <div className="center">
                            <span>ᕦʕ •ᴥ•ʔᕤ</span>
                        </div>
                    </div>

                    <div>
                        <span>
                            <label htmlFor="usernameInputId">Username</label>
                        </span>
                        <input id="usernameInputId" name="username" type="email" value={this.state.username} onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="passwordInputId">Password</label>
                        <input id="passwordInputId" name="password" type="password" value={this.state.password} onChange={this.handleChange} minLength="8" required />
                    </div>
                    <div>
                        <label htmlFor="passwordReTypeInputId">Password</label>
                        <input id="passwordReTypeInputId" name="passwordReType" type="password" value={this.state.passwordReType} onChange={this.handleChange} minLength="8" required />
                    </div>
                    <div className="submitButton">
                        <input type="submit" value="Submit" />
                    </div>
                    <div>
                        <div className="center">
                            <span>Note: Passwords must be more than 8 characters and include at least one number or special character</span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(UserForm)