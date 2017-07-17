/**
 * Created by ouyangcharles on 2016/12/23.
 */

const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('begin', () => {
  console.log('Event Begin.');
}).on('execute', () => {
  console.log('Event execute 1');
}).on('execute', () => {
  console.log('Event execute 2');
}).once('once', () => {
  console.log('Only execute one time.');
}).on('end', () => {
  console.log('Event End.');
});

emitter.emit('begin');
emitter.emit('execute');
emitter.emit('execute');
emitter.emit('once');
emitter.emit('once');
emitter.emit('end');