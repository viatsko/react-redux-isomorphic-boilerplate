#!/usr/bin/env node

/* eslint global-require: 0 */

if (process.env.NODE_ENV !== 'production') {
  if (!require('piping')({
    hook: true,
    ignore: /(\/\.|~$|\.json$)/i
  })) {
    process.exit();
  }
}

require('../server.babel'); // babel registration (runtime transpilation for node)
require('../api/api');
