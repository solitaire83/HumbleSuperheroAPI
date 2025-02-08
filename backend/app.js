const express = require('express');
require('dotenv').config({path: './cfg.cfg'});

const APP = express();
const PORT = process.env.PORT;

const colors = require('./utils/ConsoleColors'); // styling for console logs :D
const routes = require('./routes/routes');
const cors = require('./utils/cors');
const jsonSyn = require('./utils/JSONSyntax');

APP.use(cors);
APP.use(express.json());
APP.use(jsonSyn); 
APP.use(routes);


APP.listen(PORT, () => {
    console.log(`[${colors.cyan}BACKEND${colors.reset}]: Launched on port ${colors.green}${PORT}${colors.reset}`);
});