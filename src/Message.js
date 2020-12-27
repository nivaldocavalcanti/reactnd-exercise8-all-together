import React from 'react';
import PropTypes from 'prop-types';

const Message = props => {
    const {cName, username, text} = props;
    return (
        <li className={cName}>
            <p>{`${username}: ${text}`}</p>
        </li>
    );
};

Message.propTypes = {
    cName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Message;