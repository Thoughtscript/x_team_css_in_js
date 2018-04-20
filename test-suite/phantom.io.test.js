'use strict'

const phantom = require('phantom'),
  liveServer = require('live-server')

const params = (port, subroot) => {
  return {
    host: '127.0.0.1',
    port: port,
    root: `./public/${subroot}`,
    file: 'index.html',
    wait: 10000,
    open: false,
    logLevel: 1
  }
}, before = () => {
  return new Promise((res, rej) => {
    try {
      liveServer.start(params(1111, 'aphrodite'))
      liveServer.start(params(2222, 'cxs'))
      liveServer.start(params(3333, 'emotion'))
      liveServer.start(params(4444, 'glamorous'))
      liveServer.start(params(5555, 'jss'))
      liveServer.start(params(9999, 'radium'))
      liveServer.start(params(7777, 'styled-components'))
      liveServer.start(params(8888, 'styletron'))
    } catch (ex) {
      liveServer.shutdown()
      console.log(`Exception setting up tests: ${ex}`)
      process.exit(0)
    }
    return res(console.log('Tests setup!'))
  })
}, after = () => {
  liveServer.shutdown()
  console.log('Tests complete - servers shut down!')
  process.exit(0)
}

const io = async (testLabel, port, size) => {
  let start = Date.now()
  const instance = await phantom.create([], {
      logger: {warn: console.log, info: () => {}, debug: () => {}, error: console.log}
    }),
    page = await instance.createPage()
  await page.on('onResourceReceived', requestedData => {})
  const status = await page.open('http://localhost:' + port)
  const ms = Date.now() - start
  console.log(`${testLabel} test completed with ${status} in ${ms} ms on port ${port} with size ${size} or @${size / ms * 1000} KB/S`)
  await instance.exit()
}

before().then(setupComplete => {
  //Wait a bit for the the liveservers to launch and initialize
  console.log('I/O Tests Beginning!')
  setTimeout(() => {
    //We start our tests
    io('aphrodite', 1111, 184  + 1.76).then(aphrodite =>
      io('cxs', 2222, 165  + 1.74).then(cxs =>
        io('emotion', 3333, 179  + 1.91).then(emotion =>
          io('glamorous', 4444, 230  + 1.72).then(glamorous =>
            io('jss', 5555, 197  + 1.79).then(jss =>
              io('radium', 9999, 230  + 2.77).then(radium =>
                io('styled-components', 7777, 205  + 1.91).then(styled =>
                  io('styletron', 8888, 179  + 1.79).then(styletron => {
                      //Wait for any asynchronous errors
                      console.log('All I/O Tests Complete!')
                      setTimeout(() => {
                        after()
                      }, 15000)
                    }
                  )
                )
              )
            )
          )
        )
      )
    )
  }, 15000)
})