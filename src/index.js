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

const Swagger = require('swagger-client')
const loggerNamespace = '@adobe/aio-lib-launch'
const logger = require('@adobe/aio-lib-core-logging')(loggerNamespace, { level: process.env.LOG_LEVEL })
const { reduceError, requestInterceptor, responseInterceptor, createRequestOptions } = require('./helpers')
const { codes } = require('./SDKErrors')

require('./types.jsdoc') // for VS Code autocomplete
/* global Response */ // for linter

/**
 * Returns a Promise that resolves with a new ExperienceLaunchAPI object.
 *
 * @param {string} imsOrgId the IMS Org Id
 * @param {string} apiKey the API key for your integration
 * @param {string} accessToken the access token for your integration
 * @returns {Promise<ExperienceLaunchAPI>} a Promise with a ExperienceLaunchAPI object
 */
function init (imsOrgId, apiKey, accessToken) {
  return new Promise((resolve, reject) => {
    const clientWrapper = new ExperienceLaunchAPI()

    clientWrapper.init(imsOrgId, apiKey, accessToken)
      .then(initializedSDK => {
        logger.debug('sdk initialized successfully')
        resolve(initializedSDK)
      })
      .catch(err => {
        logger.debug(`sdk init error: ${err}`)
        reject(err)
      })
  })
}

/**
 * This class provides methods to call your ExperienceLaunchAPI APIs.
 * Before calling any method initialize the instance by calling the `init` method on it
 * with valid values for imsOrgId, apiKey and accessToken
 */
class ExperienceLaunchAPI {
  /**
   * Initializes a ExperienceLaunchAPI object and returns it.
   *
   * @param {string} imsOrgId the IMS Org Id
   * @param {string} apiKey the API key for your integration
   * @param {string} accessToken the access token for your integration
   * @returns {Promise<ExperienceLaunchAPI>} a ExperienceLaunchAPI object
   */
  async init (imsOrgId, apiKey, accessToken) {
    // init swagger client
    const spec = require('../spec/api.json')
    const swagger = new Swagger({
      spec: spec,
      requestInterceptor,
      responseInterceptor,
      usePromise: true
    })
    this.sdk = (await swagger)

    const initErrors = []
    if (!imsOrgId) {
      initErrors.push('imsOrgId')
    }
    if (!apiKey) {
      initErrors.push('apiKey')
    }
    if (!accessToken) {
      initErrors.push('accessToken')
    }

    if (initErrors.length) {
      const sdkDetails = { imsOrgId, apiKey, accessToken }
      throw new codes.ERROR_SDK_INITIALIZATION({ sdkDetails, messageValues: `${initErrors.join(', ')}` })
    }

    /**
     * The IMS Org Id
     *
     * @type {string}
     */
    this.imsOrgId = imsOrgId

    /**
     * The api key from your integration
     *
     * @type {string}
     */
    this.apiKey = apiKey

    /**
     * The access token from your integration
     *
     * @type {string}
     */
    this.accessToken = accessToken

    return this
  }

  __createRequestOptions ({ body } = {}) {
    return createRequestOptions({
      imsOrgId: this.imsOrgId,
      apiKey: this.apiKey,
      accessToken: this.accessToken,
      body
    })
  }

  /**
   * Get an Environment by Id.
   *
   * @param {string} id the environment id
   * @returns {Promise<Response>} the response
   */
  getEnvironment (id) {
    const sdkDetails = { id }

    return new Promise((resolve, reject) => {
      this.sdk.apis.environments.getEnvironment({ ID: id }, this.__createRequestOptions())
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(new codes.ERROR_GET_ENVIRONMENT({ sdkDetails, messageValues: reduceError(err) }))
        })
    })
  }
}

module.exports = {
  init: init
}
