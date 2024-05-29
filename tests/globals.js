const $__NOR__ = () => { return {} }
const $__NOC__ = () => { return {} }

/**
 * @name buffer
 * ```sh
 * console.log(buffer);
 * 
 * {
 *  $__NOC__: [Function: $__NOC__],
 *  $__NOR__: [Function: $__NOR__],
 * }
 * ```
 */
const buffer = Bun.inspect({ $__NOC__, $__NOR__ });

await Bun.write('.cache/tests.globals.txt', buffer)