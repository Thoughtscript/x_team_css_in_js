'use strict'

const liveServer = require('live-server')

const params = (port, subroot) => {
  return {
    host: '127.0.0.1',
    port: port,
    root: `./public/${subroot}`,
    file: 'index.html',
    wait: 0,
    open: true,
    logLevel: 1
  }
}

liveServer.start(params(1111, 'aphrodite'))
liveServer.start(params(2222, 'cxs'))
liveServer.start(params(3333, 'emotion'))
liveServer.start(params(4444, 'glamorous'))
liveServer.start(params(5555, 'jss'))
liveServer.start(params(9999, 'radium'))
liveServer.start(params(7777, 'styled-components'))
liveServer.start(params(8888, 'styletron'))

