/**
 * Creates a start configuration object with a generic type T.
 * @example
 * ```typescript
 * const startConfig = createStartConfig({ name: 'John', age: 30 });
 * console.log(startConfig.config); // { name: 'John', age: 30 }
 * ```
 */
export declare function createStartConfig<T = Record<string, any>>(config: T): {
    config: T;
};
/**
 * Parses the input configuration and returns the parsed result.
 *
 * @example
 * ```typescript
 * const startConfig = createStartConfig({ name: 'John', age: 30 });
 * const parsedConfig = parseConfig(startConfig);
 * console.log(parsedConfig); // { name: 'John', age: 30 }
 * ```
 */
export declare function parseConfig(config: ReturnType<typeof createStartConfig> & {
    raw: string;
}): any;
/**
 * Reads a configuration value from the input configuration object using a query string.
 *
 * @example
 * ```typescript
 * const startConfig = createStartConfig({ name: 'John', age: 30 });
 * const parsedValue = readConfig(startConfig, '.name');
 * console.log(parsedValue); // 'John'
 * ```
 */
export declare function readConfig(config: any, query: string): string;
/**
 * Constructs a query string from a root string and an array of path segments.
 *
 * @example
 * ```typescript
 * const root = `{ 'name': "john" }`;
 * const path = ['name'];
 * const query = $q(root, ...path) // any;
 * console.log(query); // any for `(({ 'name': "john" })['name'])` \/* john *\/
 * ```
 */
declare function $q(root: TemplateStringsArray, ...path: string[]): string;
declare const _default: {
    createStartConfig: typeof createStartConfig;
    parseConfig: typeof parseConfig;
    readConfig: typeof readConfig;
    $q: typeof $q;
};
export default _default;
