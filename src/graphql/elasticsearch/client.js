import config from 'config';
import elasticsearch from 'elasticsearch';

const { getPort } = require('../../helpers/elasticsearch')

const client = new elasticsearch.Client({
  host: `${config.elasticsearch.protocol}://${config.elasticsearch.host}${getPort(config.elasticsearch.port)}`
});

export default client;
