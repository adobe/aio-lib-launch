/**
 * Returns a Promise that resolves with a new ExperienceLaunchAPI object.
 * @param imsOrgId - the IMS Org Id
 * @param apiKey - the API key for your integration
 * @param accessToken - the access token for your integration
 * @returns a Promise with a ExperienceLaunchAPI object
 */
declare function init(imsOrgId: string, apiKey: string, accessToken: string): Promise<ExperienceLaunchAPI>;

/**
 * This class provides methods to call your ExperienceLaunchAPI APIs.
 * Before calling any method initialize the instance by calling the `init` method on it
 * with valid values for imsOrgId, apiKey and accessToken
 */
declare class ExperienceLaunchAPI {
    /**
     * Initializes a ExperienceLaunchAPI object and returns it.
     * @param imsOrgId - the IMS Org Id
     * @param apiKey - the API key for your integration
     * @param accessToken - the access token for your integration
     * @returns a ExperienceLaunchAPI object
     */
    init(imsOrgId: string, apiKey: string, accessToken: string): Promise<ExperienceLaunchAPI>;
    /**
     * The IMS Org Id
     */
    imsOrgId: string;
    /**
     * The api key from your integration
     */
    apiKey: string;
    /**
     * The access token from your integration
     */
    accessToken: string;
    /**
     * Get an Environment by Id.
     * @param id - the environment id
     * @returns the response
     */
    getEnvironment(id: string): Promise<Response>;
}

/**
 * An example of a typed object.
 * @property optionA - some option
 * @property optionB - another option
 */
declare type MyParameters = {
    optionA: string;
    optionB: string;
};

/**
 * Another typed object.
 * @property mayBeSomething - an option
 */
declare type AnotherThing = {
    mayBeSomething: boolean;
};

