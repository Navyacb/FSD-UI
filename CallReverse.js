const EventEmitter = require('events');
const ReverseStr=require('./reverseStr');
const reverser = new ReverseStr();
reverser.reverse("hello");
reverser.addListener('messageLogged',()=>{
    console.log('messageLogged');
});

// reverser.addListener('reverse',(reversed)=>{
//     console.log(`The reveresed string is ${reversed} `);
// })