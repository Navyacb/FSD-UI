const EventEmitter = require('events');
class ReverseStr extends EventEmitter
{
    reverse(str){
       let reversed = "";      
        for (var i = str.length - 1; i >= 0; i--)
        {         
            reversed += str[i];  
        }
        console.log("The reversed string is "+reversed)     
        this.emit('messageLogged');
    }
}
module.exports=ReverseStr;