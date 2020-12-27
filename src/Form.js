import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        message: ''
    }
    /*
        If the user did not type anything, he/she should not be
        allowed to submit.
    */
    isDisabled = () => {
        return this.state.message === '';
    };

    handleChange = (event) => {
        const message = event.target.value;
        this.setState({ message: message.trim() });
    }

    sendMessage = event => {
        this.props.addFunc(event);
        this.setState({ message: '' });
    }

    render() {
        const {username} = this.props;
        return (
            <form className="input-group" onSubmit={this.sendMessage}>
                <input type="hidden" name="username" value={username} />
                <input type="text" name="message" className="form-control" placeholder="Enter your message..." onChange={this.handleChange} value={this.state.message} />
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>SEND</button>
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    username: PropTypes.string.isRequired,
    addFunc: PropTypes.func.isRequired,
};

export default Form;