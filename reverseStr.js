const EventEmitter = require('events');
class ReverseStr extends EventEmitter
{
    reverse(message){
       let reversed = "";      
        for (var i = message.length - 1; i >= 0; i--)
        {         
            reversed += message[i];  
        }
        console.log("The reversed string is "+reversed);     
        this.emit('messageLogged');
    }
}
module.exports=ReverseStr;