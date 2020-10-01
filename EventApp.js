const EventEmitter = require('events');
const emitter=new EventEmitter();
const loggerCall=require('./Eventlogger');
emitter.on('messageLogged',()=>{
    loggerCall.logger('hello world');
});
console.log('event executed successfully');