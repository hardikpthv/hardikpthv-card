'use strict';

// Pull in our modules
const fs = require('fs');
const path = require('path');
const cardMessage = require('./bin/card.js');

fs.writeFileSync(path.join(__dirname, 'bin/output'), cardMessage);
