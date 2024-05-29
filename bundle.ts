import { sleep } from "bun";

await Bun.$`bunx tsc -p tsconfig.json`;
await Bun.$`bun build src/*.ts --target=bun --format=esm --splitting --outdir=dist --sourcemap=external`;
await sleep(500)
