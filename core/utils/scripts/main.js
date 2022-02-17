'use strict';
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});
exports.createMDXImportList = require('../createMDXImportList').createMDXImportList;
