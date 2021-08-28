import React from 'react';

export class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordReType : ''
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
            <div class="formContainer">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <span>
                            Congratulations you are Approved!
                        </span>
                    </div>
                    <div>
                        <span>
                            <label for="usernameInputId">Username</label>
                        </span>
                        <input id="usernameInputId" name="username" type="email" value={this.state.username} onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label for="passwordInputId">Password</label>
                        <input id="passwordInputId" name="password" type="password" value={this.state.password} onChange={this.handleChange} minlength="8" required />
                    </div>
                    <div>
                        <label for="passwordReTypeInputId">Password</label>
                        <input id="passwordReTypeInputId" name="passwordReType" type="password" value={this.state.passwordReType} onChange={this.handleChange} minlength="8" required />
                    </div>
                    <div class="submitButton">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}
