'use strict';

const Network = require('ataraxia');
const TCPTransport = require('.');

const net = new Network({ name: 'ataraxia-example' });
net.addTransport(new TCPTransport());

net.on('node:available', node => {
	console.log('A new node is available:', node);
	node.send('hello');
});

net.on('message', msg => {
	console.log('A message was received', msg.type, 'with data', msg.data, 'from', msg.returnPath.id);
});

net.start()
	.then(() => console.log('Network has started'))
	.catch(err => console.error(err));
