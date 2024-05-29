import { $q, createStartConfig, parseConfig, readConfig } from ".";

const startConfig = createStartConfig({
    bundler: {
        bun: {
            config: {
                transpiler: {
                    jsx: "react",
                    jsxFactory: "React.createElement",
                    jsxFragment: "React.Fragment",
                },
            },
        },
    },
});
console.log(startConfig);

const config = parseConfig({ ...startConfig, raw: Bun.inspect(startConfig) });
console.log(config);

// reading from some config
const bundler = readConfig(config, $q`config.bundler`)
console.log(bundler);


// reading from previous querying in config
const bun = readConfig(bundler, $q`bun.config`)
console.log(bun);
