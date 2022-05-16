import React, {useEffect, useRef,useState} from 'react';
import '../Assets/Css/chatroom.css'
import {withRouter} from "react-router-dom";
import SocketIoClient from 'socket.io-client'
import HostChat from "../Components/HostChat";
import UserChat from "../Components/UserChat";
import manImg from '../Assets/Images/avatar-man.png'
import womanImg from '../Assets/Images/avatar-woman.png'
const ChatRoom = (props) => {
    const [message,setMessage] = useState();
    const [hostMessage,setHostMessage] = useState([]);
    const [userMessage,setUserMessage] = useState([]);
    const socket = useRef(SocketIoClient.connect('http://localhost:5000/socket'));
    useEffect(()=>{
       socket.current.on('newMessage',(message)=>{
           console.log(message);
           setUserMessage((oldUserMessage)=>[...oldUserMessage,{msg:message}])

       })

    },[])
    const sendMessage = (e)=>{
    e.preventDefault()
        socket.current.emit('newMessage', {
            msg:message
        })
        setHostMessage((oldArray)=>[...oldArray,{msg:message}])
        setMessage('')
    }
    return (
        <div className={'chat-room-page'}>
        <div className={'chat-room-section'}>
            <div className={'chat-room-section-header'}>
                <span className={'chat-room-section-header-details'}>
                    <img src={womanImg}/>
                    <div>
                        <span>name</span>
                        <span>gender</span>
                    </div>

                </span>
                <span className={'chat-room-section-header-logo'}>chatroom</span>
            </div>
            <div className={'chat-room-section-body'}>
                {
                    hostMessage.length > 0 ? hostMessage.map(item=>(  <HostChat></HostChat>)):null
                }
                {
                    userMessage.length > 0 ? userMessage.map(item=>(<UserChat></UserChat>)):null
                }


            </div>
            <div className={'chat-room-section-footer'}>
                    <form onSubmit={sendMessage}>
                    <input placeholder={'enter text ...'} value={message} className={'input-message'} onChange={(e)=>setMessage(e.target.value)}/>
                    <button>send</button>
                    </form>
            </div>

        </div>
        </div>
    );
};

export default withRouter(ChatRoom);