$(function () {

    const socket = io("http://localhost:5000/", {
        transportOptions: {
            polling: {
                extraHeaders: {
                    'authorization': 'Bearer abc',
                },
            },
        },
    });

  socket.on("messages",(data)=>{
console.log(data);
  })
  socket.emit("send-message",{
    "name":"ahmet"
  })
});