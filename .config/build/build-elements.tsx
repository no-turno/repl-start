import "./build-env.d.ts";
import type { TranspilerOptions } from "bun";
import React from "react";

type Config = {
	bundler: {
		bun: {
			config: {
				transpiler: TranspilerOptions;
			};
		};
	};
	children: any;
};
export function Config<T>({ children: entrypoints, ...props }: Config) {
	return { entrypoints, config: props } as T;
}
export function parse(
	component: ReturnType<
		typeof Config<{
			props: {
				bundler: {
					bun: {
						config: {
							transpiler: TranspilerOptions;
						};
					};
				};
				children: string[];
			};
		}>
	>,
) {
	return {
		bundler: component.props.bundler,
		entrypoints: component.props.children,
	};
}

export default function BuildConfig(props: Config) {
	const mod = (<Config {...props} />) as any;
	return parse(mod) as any;
}
