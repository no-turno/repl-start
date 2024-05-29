/**
 * Creates a start configuration object with a generic type T.
 * @example
 * ```typescript
 * const startConfig = createStartConfig({ name: 'John', age: 30 });
 * console.log(startConfig.config); // { name: 'John', age: 30 }
 * ```
 */
function createStartConfig<T = Record<string, any>>(config: T): { config: T } {
    return { config }
}


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
function parseConfig(config: ReturnType<typeof createStartConfig> & { raw: string }): any {
    return new ShadowRealm().evaluate(`const out = ${Bun.inspect(config)};out.raw`)
}


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
function readConfig(config: any, query: string): string {
    return new ShadowRealm().evaluate(`Bun.inspect((${config})${query})`)
}

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
function $q(root: TemplateStringsArray, ...path: string[]): string {
    return (root.toString().concat(path.join())).split('.').map(k => Bun.inspect([k])).join('')
}

export {
    createStartConfig,
    parseConfig,
    readConfig,
    $q
}