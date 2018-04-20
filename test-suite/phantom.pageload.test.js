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

const loadPage = async (testLabel, port) => {
  let start = Date.now()
  const instance = await phantom.create([], {
      logger: {warn: console.log, info: () => {}, debug: () => {}, error: console.log}
    }),
    page = await instance.createPage()
  //await page.on('onResourceRequested', requestData => console.info('Requesting', requestData.url))
  const status = await page.open('http://localhost:' + port),
    msg = await `${testLabel} test completed in ${Date.now() - start} ms on port ${port} - ${status}`
  console.log(msg)
  await instance.exit()
}

before().then(setupComplete => {
  //Wait a bit for the the liveservers to launch and initialize
  console.log('Page Load Tests Beginning!')
  setTimeout(() => {
    //We start our tests
    loadPage('aphrodite', 1111).then(aphrodite =>
      loadPage('cxs', 2222).then(cxs =>
        loadPage('emotion', 3333).then(emotion =>
          loadPage('glamorous', 4444).then(glamorous =>
            loadPage('jss', 5555).then(jss =>
              loadPage('radium', 9999).then(radium =>
                loadPage('styled-components', 7777).then(styled =>
                  loadPage('styletron', 8888).then(styletron => {
                      //Wait for any asynchronous errors
                      console.log('Page Load Tests Complete!')
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