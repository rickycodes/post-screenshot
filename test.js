const test = require('tape')
const fs = require('fs')
const isFunc = func => typeof func === 'function'

// tested
const getRandomN = require('./src/getRandomN')
const staticBots = require('./src/staticBots')
const getFilesize = require('./src/getFilesize')
const getTweetMsg = require('./src/getTweetMsg')
const getRandomStatus = require('./src/getRandomStatus')
const statuses = require('./src/statuses')
const convertVideoToGif = require('./src/convertVideoToGif')

// untested
const onRecording = require('./src/onRecording') // eslint-disable-line
const onScreenshot = require('./src/onScreenshot') // eslint-disable-line
const postGif = require('./src/postGif') // eslint-disable-line
const update = require('./src/update') // eslint-disable-line

test('getRandomN', t => {
  t.plan(3)
  const getThreeBots = getRandomN(staticBots, 3)
  t.true(isFunc(getRandomN))
  t.true(getThreeBots.length === 3)
  t.true(staticBots.length > getThreeBots.length)
})

test('getFilesize', t => {
  t.plan(2)
  t.true(isFunc(getFilesize))
  t.true(getFilesize('./src/getFilesize.js') === 192)
})

test('getTweetMsg', t => {
  t.plan(2)
  t.true(isFunc(getTweetMsg))
  t.true(getTweetMsg('beep beeb boop', ['e', 'f', 'g']), `beep beeb boop

#bot2bot #botALLY

/cc e,f,g`)
})

test('getRandomStatus', t => {
  t.plan(2)
  t.true(isFunc(getRandomStatus))
  t.true(statuses.includes(getRandomStatus(statuses)))
})

test('statuses', t => {
  t.plan(2)
  t.true(Array.isArray(statuses))
  t.true(statuses.length)
})

test('staticBots', t => {
  t.plan(2)
  t.true(Array.isArray(staticBots))
  t.true(staticBots.length)
})

test('convertVideoToGif', t => {
  t.plan(2)
  convertVideoToGif('fakeshell.sh', null, null, (error) => {
    t.true(error)
    t.true(error.message === 'fail')
  })
})

// ¯\_(ツ)_/¯
test('isFunc', t => {
  t.plan(3)
  t.false(isFunc(null))
  t.true(isFunc(isFunc)) // ;)
  t.true(isFunc(function () {}))
})

// test config
if (process.env.NODE_ENV === 'local') {
  const { paths } = require('./config')
  const pathKeys = Object.keys(paths)
  test('paths', t => {
    t.plan(pathKeys.length)
    pathKeys.map(path => t.true(fs.existsSync(paths[path])))
  })
}
