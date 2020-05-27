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

## Classes

<dl>
<dt><a href="#ExperienceLaunchAPI">ExperienceLaunchAPI</a></dt>
<dd><p>This class provides methods to call your ExperienceLaunchAPI APIs.
Before calling any method initialize the instance by calling the <code>init</code> method on it
with valid values for imsOrgId, apiKey and accessToken</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#init">init(imsOrgId, apiKey, accessToken)</a> ⇒ <code><a href="#ExperienceLaunchAPI">Promise.&lt;ExperienceLaunchAPI&gt;</a></code></dt>
<dd><p>Returns a Promise that resolves with a new ExperienceLaunchAPI object.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#MyParameters">MyParameters</a> : <code>object</code></dt>
<dd><p>An example of a typed object.</p>
</dd>
<dt><a href="#AnotherThing">AnotherThing</a> : <code>object</code></dt>
<dd><p>Another typed object.</p>
</dd>
</dl>

<a name="ExperienceLaunchAPI"></a>

## ExperienceLaunchAPI
This class provides methods to call your ExperienceLaunchAPI APIs.
Before calling any method initialize the instance by calling the `init` method on it
with valid values for imsOrgId, apiKey and accessToken

**Kind**: global class  

* [ExperienceLaunchAPI](#ExperienceLaunchAPI)
    * [.imsOrgId](#ExperienceLaunchAPI+imsOrgId) : <code>string</code>
    * [.apiKey](#ExperienceLaunchAPI+apiKey) : <code>string</code>
    * [.accessToken](#ExperienceLaunchAPI+accessToken) : <code>string</code>
    * [.init(imsOrgId, apiKey, accessToken)](#ExperienceLaunchAPI+init) ⇒ [<code>Promise.&lt;ExperienceLaunchAPI&gt;</code>](#ExperienceLaunchAPI)
    * [.getEnvironment(id)](#ExperienceLaunchAPI+getEnvironment) ⇒ <code>Promise.&lt;Response&gt;</code>

<a name="ExperienceLaunchAPI+imsOrgId"></a>

### experienceLaunchAPI.imsOrgId : <code>string</code>
The IMS Org Id

**Kind**: instance property of [<code>ExperienceLaunchAPI</code>](#ExperienceLaunchAPI)  
<a name="ExperienceLaunchAPI+apiKey"></a>

### experienceLaunchAPI.apiKey : <code>string</code>
The api key from your integration

**Kind**: instance property of [<code>ExperienceLaunchAPI</code>](#ExperienceLaunchAPI)  
<a name="ExperienceLaunchAPI+accessToken"></a>

### experienceLaunchAPI.accessToken : <code>string</code>
The access token from your integration

**Kind**: instance property of [<code>ExperienceLaunchAPI</code>](#ExperienceLaunchAPI)  
<a name="ExperienceLaunchAPI+init"></a>

### experienceLaunchAPI.init(imsOrgId, apiKey, accessToken) ⇒ [<code>Promise.&lt;ExperienceLaunchAPI&gt;</code>](#ExperienceLaunchAPI)
Initializes a ExperienceLaunchAPI object and returns it.

**Kind**: instance method of [<code>ExperienceLaunchAPI</code>](#ExperienceLaunchAPI)  
**Returns**: [<code>Promise.&lt;ExperienceLaunchAPI&gt;</code>](#ExperienceLaunchAPI) - a ExperienceLaunchAPI object  

| Param | Type | Description |
| --- | --- | --- |
| imsOrgId | <code>string</code> | the IMS Org Id |
| apiKey | <code>string</code> | the API key for your integration |
| accessToken | <code>string</code> | the access token for your integration |

<a name="ExperienceLaunchAPI+getEnvironment"></a>

### experienceLaunchAPI.getEnvironment(id) ⇒ <code>Promise.&lt;Response&gt;</code>
Get an Environment by Id.

**Kind**: instance method of [<code>ExperienceLaunchAPI</code>](#ExperienceLaunchAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the environment id |

<a name="init"></a>

## init(imsOrgId, apiKey, accessToken) ⇒ [<code>Promise.&lt;ExperienceLaunchAPI&gt;</code>](#ExperienceLaunchAPI)
Returns a Promise that resolves with a new ExperienceLaunchAPI object.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;ExperienceLaunchAPI&gt;</code>](#ExperienceLaunchAPI) - a Promise with a ExperienceLaunchAPI object  

| Param | Type | Description |
| --- | --- | --- |
| imsOrgId | <code>string</code> | the IMS Org Id |
| apiKey | <code>string</code> | the API key for your integration |
| accessToken | <code>string</code> | the access token for your integration |

<a name="MyParameters"></a>

## MyParameters : <code>object</code>
An example of a typed object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| optionA | <code>string</code> | some option |
| optionB | <code>string</code> | another option |

<a name="AnotherThing"></a>

## AnotherThing : <code>object</code>
Another typed object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| mayBeSomething | <code>boolean</code> | an option |

### Debug Logs

```bash
LOG_LEVEL=debug <your_call_here>
```

Prepend the `LOG_LEVEL` environment variable and `debug` value to the call that invokes your function, on the command line. This should output a lot of debug data for your SDK calls.

### Contributing

Contributions are welcome! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
