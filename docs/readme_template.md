<!--
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->
<!-- DO NOT MODIFY README.MD DIRECTLY !-->
<!-- MODIFY THE SOURCE JSDOCS AND DOCS/README_TEMPLATE.MD AND RUN: npm run generate-docs !-->

[![Version](https://img.shields.io/npm/v/@adobe/aio-lib-launch.svg)](https://npmjs.org/package/@adobe/aio-lib-launch)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-lib-launch.svg)](https://npmjs.org/package/@adobe/aio-lib-launch)
[![Build Status](https://travis-ci.com/adobe/aio-lib-launch.svg?branch=master)](https://travis-ci.com/adobe/aio-lib-launch)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Greenkeeper badge](https://badges.greenkeeper.io/adobe/aio-lib-launch.svg)](https://greenkeeper.io/)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-lib-launch/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-lib-launch/)

# Adobe I/O - Adobe Experience Launch API Lib

### Installing

```bash
$ npm install @adobe/aio-lib-launch
```

### Usage
1) Initialize the SDK

```javascript
const sdk = require('@adobe/aio-lib-launch')

async function sdkTest() {
  //initialize sdk
  const client = await sdk.init('<ims org id>', 'x-api-key', '<valid auth token>')
}
```

2) Call methods using the initialized SDK

```javascript
const sdk = require('@adobe/aio-lib-launch')

async function sdkTest() {
  // initialize sdk
  const client = await sdk.init('<ims org id>', 'x-api-key', '<valid auth token>')

  // call methods
  try {
    // get... something
    const result = await client.getEnvironment('my-environment-id')
    console.log(result)

  } catch (e) {
    console.error(e)
  }
}
```

{{>main-index~}}
{{>all-docs~}}


### Debug Logs

```bash
LOG_LEVEL=debug <your_call_here>
```

Prepend the `LOG_LEVEL` environment variable and `debug` value to the call that invokes your function, on the command line. This should output a lot of debug data for your SDK calls.

### Contributing

Contributions are welcome! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
