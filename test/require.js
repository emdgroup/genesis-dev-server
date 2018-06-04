const assert = require('assert'),
  path = require('path');

const files = ['utils.js', 'index.js'].map(f => path.resolve(f, '..'));

describe('require', () => {
  files.map(file => {
    describe(file, () => {
      it('require should not throw exception', () => assert.ok(require(file)));
    });
  })
});
