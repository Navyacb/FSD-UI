// const EventEmitter = require('events');
// const emitter=new EventEmitter();
// console.log('trying to initialize an event');
// function logger(message)
// {
//     console.log('logger message is: ',message);
//     emitter.emit('messageLogged');
// }
// module.exports.logger=logger;

const EventEmitter = require('events');
class Logger extends EventEmitter
{
    log(message) {
        console.log(message)
        this.emit('messageLogged');
    }
    log1(message)
    {
        console.log(message);
        this.emit('messageLogged1');
    }
}
module.exports=Logger;