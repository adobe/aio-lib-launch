/**
 * Converts a fetch Response object's body contents to a string.
 * @param response - the response object
 * @returns a Promise that resolves to the converted object's body contents
 */
declare function responseBodyToString(response: Response): Promise<string>;

/**
 * Filters a json object, removing any undefined or null entries.
 * Returns a new object (does not mutate original)
 * @param json - the json object to filter
 * @returns the filtered object (a new object)
 */
declare function filterUndefinedOrNull(json: any): any;

/**
 * Converts a fetch Request object to a string.
 * @param request - the request object
 * @returns the converted object
 */
declare function requestToString(request: Request): any;

/**
 * Returns a Promise that resolves with a new ExperienceLaunch object.
 * @param tenantId - the tenant id
 * @param apiKey - the API key for your integration
 * @param accessToken - the access token for your integration
 * @returns a Promise with a ExperienceLaunch object
 */
declare function init(tenantId: string, apiKey: string, accessToken: string): Promise<ExperienceLaunch>;

/**
 * This class provides methods to call your ExperienceLaunch APIs.
 * Before calling any method initialize the instance by calling the `init` method on it
 * with valid values for tenantId, apiKey and accessToken
 */
declare class ExperienceLaunch {
    /**
     * Initializes a ExperienceLaunch object and returns it.
     * @param tenantId - the tenant id
     * @param apiKey - the API key for your integration
     * @param accessToken - the access token for your integration
     * @returns a ExperienceLaunch object
     */
    init(tenantId: string, apiKey: string, accessToken: string): Promise<ExperienceLaunch>;
    /**
     * The tenant id
     */
    tenantId: string;
    /**
     * The api key from your integration
     */
    apiKey: string;
    /**
     * The access token from your integration
     */
    accessToken: string;
    /**
     * Get something.
     * @param [parameters = {}] - parameters to pass
     * @returns the response
     */
    getSomething(parameters?: MyParameters): Promise<Response>;
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

