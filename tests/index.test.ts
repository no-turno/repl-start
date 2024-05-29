import {test, it,describe, expect} from "bun:test"
import { $q, createStartConfig, parseConfig, readConfig } from "../src"

describe('config methods', () => {
    test("should return config object", () => {
        const config = createStartConfig({
            test: true
        })
        expect(config).toMatchObject({
            test: true
        })
    })

    test("should parse config object", () => {
        const config = parseConfig(createStartConfig({
            test: true
        }))

        expect(config).toMatchSnapshot(Bun.inspect({
            test: true
        }))
    })

    test("should query parsed config object", () => {
        const config = parseConfig(createStartConfig({
            test: true
        }))
        expect(readConfig(config, $q`test`) === "true").toBeTrue()
    })
})