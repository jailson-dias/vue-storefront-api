
const config = require('config')
const kue = require('kue')
const queue = kue.createQueue(Object.assign(config.kue, { redis: config.redis }))
const es = require('elasticsearch')
const { getPort } = require('../src/helpers/elasticsearch')

const esConfig = {
  host: `${config.elasticsearch.protocol}://${config.elasticsearch.host}${getPort(config.elasticsearch.port)}`,
  log: 'debug',
  apiVersion: config.elasticsearch.apiVersion,
  requestTimeout: 1000 * 60 * 60,
  keepAlive: false
}
if (config.elasticsearch.user && config.elasticsearch.user.length > 0) {
  esConfig.httpAuth = config.elasticsearch.user + ':' + config.elasticsearch.password
}
const client = new es.Client(esConfig)

exports.db = client
exports.queue = queue
