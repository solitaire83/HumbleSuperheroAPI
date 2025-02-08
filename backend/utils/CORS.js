const cors = require('cors');
const opts = {
    origin: '*',
    methods: 'GET, POST',
    allowedHeaders: 'Origin, Content-Type'
};

module.exports = cors(opts);
