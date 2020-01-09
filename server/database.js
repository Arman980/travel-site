const { Pool } = require('pg');
// Add postsgreSQL database as a client

const pool = new Pool({
    connectionString: 'postgres://anyifhtokyqjej:7fc16f2b4d22931988859787cc454b1261f445ef250bc2f868d1fa0c2bcc6740@ec2-54-195-252-243.eu-west-1.compute.amazonaws.com:5432/d9r3hq8tgl86nl',
    ssl: true
});

module.exports = pool;