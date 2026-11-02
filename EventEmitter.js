const EventEmitter = require('events');

// Create EventEmitter object
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('response', (name, id) => {
    console.log("Listener 1:");
    console.log("Name:", name);
    console.log("ID:", id);
});

// Second listener
myEmitter.on('response', (name, id) => {
    console.log("Listener 2:");
    console.log("Student:", name);
    console.log("Student ID:", id);
});

// Emit the event and pass name and id
myEmitter.emit('response', 'Disha', 101);