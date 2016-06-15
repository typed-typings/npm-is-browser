/// <reference path="bundle.d.ts" />
/// <reference path="typings/index.d.ts" />

import isBrowser = require('is-browser');
import assert = require('assert');

assert.equal(isBrowser, false);
