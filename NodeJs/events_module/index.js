const EventEmitter = require('events');

const event = new EventEmitter();
console.log(event);
event.on("pageStatus", (statusCode, msg) => {
    console.log(`The status code is ${statusCode} and page is ${msg}.`);
})

event.emit("pageStatus", 200, "Ok");