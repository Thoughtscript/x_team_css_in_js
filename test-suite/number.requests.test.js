'use strict'

const liveServer = require('live-server'),
  request = require('request')

const params = (port, subroot) => {
    return {
      host: 'localhost',
      port: port,
      root: `./public/${subroot}`,
      file: 'index.html',
      wait: 10000,
      open: false,
      logLevel: 1
    }
  },

  before = () => {
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
  },

  after = () => {
    liveServer.shutdown()
    console.log('Tests complete - servers shut down!')
    process.exit(0)
  },

  requests = (testLabel, port, cycles) => {
    return new Promise((res, rej) => {
      let start = Date.now(), promises = []
      try {
        for (let i = 0; i < cycles; i++) {

          let prom = new Promise((innerResolve, innerRej) =>
            request('http://localhost:' + port, (err, response, body) =>  innerResolve(response))
          )
          promises.push(prom)

        }
      } catch (ex) {
        liveServer.shutdown()
        console.log(`Exception setting up tests: ${ex}`)
        process.exit(0)
      }
      Promise.all(promises).then(v =>
        res(console.log(`${testLabel} test completed after ${cycles} requests in ${Date.now() - start} ms on port ${port}`))
      )
    })
  }

before().then(setupComplete => {
  //Wait a bit for the the liveservers to launch and initialize
  console.log('Preparing to start tests!')
  setTimeout(() => {
    //We start our tests

    requests('aphrodite', 1111, 1000).then(aphrodite =>
      requests('cxs', 2222, 1000).then(cxs =>
        requests('emotion', 3333, 1000).then(emotion =>
          requests('glamorous', 4444, 1000).then(glamorous =>
            requests('jss', 5555, 1000).then(jss =>
              requests('radium', 9999, 1000).then(radium =>
                requests('styled-components', 7777, 1000).then(styled =>
                  requests('styletron', 8888, 1000).then(styletron => {

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