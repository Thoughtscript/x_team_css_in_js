'use strict'

const liveServer = require('live-server'),
  http = require('http')

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
      return res(console.log(`Exception setting up tests: ${ex}`))
    }
    return res(console.log('Tests setup!'))
  })
}, after = () => {
  liveServer.shutdown()
  console.log('Tests complete - servers shut down!')
}, runBenchmark = (testLabel, port, cycles) => {
  return new Promise((res, rej) => {
    let start = Date.now()
    try {
      for (let i = 0; i < cycles; i++) {
        const req = http.get('http://localhost:' + port, res => {
          res.setEncoding('utf8')
          res.on('data', (chunk) => { })
          res.on('end', () => { })
        })
        req.on('error', e => res(console.log(`Exception setting up tests: ${e}`)))
      }
    } catch (ex) {
      return res(console.log(`Exception setting up tests: ${ex}`))
    }
    return res(console.log(`${testLabel} test completed after ${cycles} cycles in ${Date.now() - start} ms on port ${port}`))
  })
}

before().then(setupComplete => {
  //Wait a bit for the the liveservers to launch and initialize
  console.log('Preparing to start tests!')
  setTimeout(() => {
    //We start our tests
    runBenchmark('aphrodite', 1111, 1000).then(aphrodite =>
      runBenchmark('cxs', 2222, 1000).then(cxs =>
        runBenchmark('emotion', 3333, 1000).then(emotion =>
          runBenchmark('glamorous', 4444, 1000).then(glamorous =>
            runBenchmark('jss', 5555, 1000).then(jss =>
              runBenchmark('radium', 9999, 1000).then(radium =>
                runBenchmark('styled-components', 7777, 1000).then(styled =>
                  runBenchmark('styletron', 8888, 1000).then(styletron => {
                      //Wait for any asynchronous errors
                      console.log('Preparing to shutdown!')
                      setTimeout(() => {
                        after()
                      }, 10000)
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