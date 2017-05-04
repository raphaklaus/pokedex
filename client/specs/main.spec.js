const chai = require('chai'),
  expect = chai.expect,
  chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

require('./home/home.spec')(expect);
require('./list/list.spec')(expect);
