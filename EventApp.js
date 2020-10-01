// const EventEmitter = require('events');
// const emitter=new EventEmitter();
// const loggerCall=require('./EventLogger');
// emitter.on('messageLogged',()=>{
//     loggerCall.logger('hello world');
// });
// console.log('event executed successfully');


  
const EventEmitter = require('events');
const Logger=require('./EventLogger');
const logger=new Logger();
logger.log('calling log method from logger module');
logger.log1('calling log1 method from logger module');
logger.addListener('messageLogged',()=>{
    console.log('Handled messageLogged Event');
});
logger.addListener('messageLogged',()=>
{
   console.log('Handled messageLogged1 Event');
});
logger.log('==END==');