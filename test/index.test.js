/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const sdk = require('../src')
const fetch = require('cross-fetch')
const { createRequestOptions } = require('../src/helpers')
const { codes } = require('../src/SDKErrors')

// /////////////////////////////////////////////

const gImsOrgId = 'test-ims-org'
const gApiKey = 'test-apikey'
const gAccessToken = 'test-token'

// /////////////////////////////////////////////

const createSwaggerOptions = ({ body } = {}) => {
  return createRequestOptions({
    imsOrgId: gImsOrgId,
    apiKey: gApiKey,
    accessToken: gAccessToken,
    body
  })
}

const createSdkClient = async () => {
  return sdk.init(gImsOrgId, gApiKey, gAccessToken)
}

// /////////////////////////////////////////////

beforeEach(() => {
  fetch.resetMocks()
})

test('sdk init test', async () => {
  const sdkClient = await createSdkClient()

  expect(sdkClient.imsOrgId).toBe(gImsOrgId)
  expect(sdkClient.apiKey).toBe(gApiKey)
  expect(sdkClient.accessToken).toBe(gAccessToken)
})

test('sdk init test - no imsOrgId', async () => {
  return expect(sdk.init(null, gApiKey, gAccessToken)).rejects.toEqual(
    new codes.ERROR_SDK_INITIALIZATION({ messageValues: 'imsOrgId' })
  )
})

test('sdk init test - no apiKey', async () => {
  return expect(sdk.init(gImsOrgId, null, gAccessToken)).rejects.toEqual(
    new codes.ERROR_SDK_INITIALIZATION({ messageValues: 'apiKey' })
  )
})

test('sdk init test - no accessToken', async () => {
  return expect(sdk.init(gImsOrgId, gApiKey, null)).rejects.toEqual(
    new codes.ERROR_SDK_INITIALIZATION({ messageValues: 'accessToken' })
  )
})

/** @private */
async function standardTest ({
  fullyQualifiedApiName, apiParameters, apiOptions,
  sdkFunctionName, sdkArgs,
  successReturnValue = {},
  ErrorClass
}) {
  const sdkClient = await createSdkClient()
  const [, apiFunction] = fullyQualifiedApiName.split('.')

  if (!ErrorClass) {
    throw new Error('ErrorClass not defined for standardTest')
  }

  // sdk function name is the same as the apiname (without the namespace) by default
  // so if it is not set, we set it
  // this means in the SDK the namespace is flattened, so functions have to have unique names
  if (!sdkFunctionName) {
    sdkFunctionName = apiFunction
  }
  const fn = sdkClient[sdkFunctionName]
  let mockFn

  // success case
  mockFn = sdkClient.sdk.mockResolved(fullyQualifiedApiName, successReturnValue)
  await expect(fn.apply(sdkClient, sdkArgs)).resolves.toEqual(successReturnValue)
  expect(mockFn).toHaveBeenCalledWith(apiParameters, apiOptions)

  // failure case
  const err = new Error('some API error')
  mockFn = sdkClient.sdk.mockRejected(fullyQualifiedApiName, err)
  await expect(fn.apply(sdkClient, sdkArgs)).rejects.toEqual(
    new ErrorClass({ sdkDetails: { ...sdkArgs }, messageValues: err })
  )
  expect(mockFn).toHaveBeenCalledWith(apiParameters, apiOptions)
}

test('getEnviroment', async () => {
  const id = 'my-id'
  const sdkArgs = [id]
  const apiParameters = { ID: id }
  const apiOptions = createSwaggerOptions()

  return expect(() => standardTest({
    fullyQualifiedApiName: 'environments.getEnvironment',
    apiParameters,
    apiOptions,
    sdkArgs,
    ErrorClass: codes.ERROR_GET_ENVIRONMENT
  })).not.toThrow()
})
