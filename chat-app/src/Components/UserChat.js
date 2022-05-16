import React from 'react';
import manImg from '../Assets/Images/avatar-man.png'
import womanImg from '../Assets/Images/avatar-woman.png'
const UserChat = () => {
    return (
        <div className={'user-chat'}>
            <div><img src={manImg}/></div>
            <div>
                <span>name</span>
                <span>times</span>
                <span>message</span>
            </div>
        </div>
    );
};

export default UserChat;