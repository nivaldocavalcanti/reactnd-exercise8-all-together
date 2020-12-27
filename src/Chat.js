import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import Form from './Form';

class Chat extends Component {

    render() {
        const {username, messages, onAdd} = this.props;
        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{username}</div>

                <ul className="message-list">
                    {messages.map((message, index) => (
                        <Message key={index} cName={ message.username === username ? 'message sender' : 'message recipient' } username={message.username} text={message.text} />
                    ))}
                </ul>

                <div>
                    <Form username={username} addFunc={onAdd} />
                </div>
            </div>
        );
    }
}

Chat.propTypes = {
    username: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default Chat;