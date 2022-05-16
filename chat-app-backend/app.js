const express = require('express');
const app = express();
const io = require('socket.io')

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/',(req,res)=>{
    res.send('home3')
})




const server = app.listen(5000,()=>{

        console.log('server is run on port 5000')

});

const socket = io(server);
const mySocket = socket.of("/socket");

mySocket.on('connection',(socket)=>{
    console.log('new user connected')


    socket.on('newMessage',(message)=>{
        console.log(message.msg)
        mySocket.emit('newMessage',message)
    })



    mySocket.on('disconnect',()=>{
        console.log('disconnect')
    })



})


