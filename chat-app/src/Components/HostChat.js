import React from 'react';
import manImg from '../Assets/Images/avatar-man.png'
import womanImg from '../Assets/Images/avatar-woman.png'
const HostChat = () => {
    return (
        <div className={'client-chat'}>
          <div><img src={womanImg}/></div>
            <div>
                <span>name</span>
                <span>times</span>
                <span>message</span>
            </div>
        </div>
    );
};

export default HostChat;