import React from "react";
import BuildConfig, { parse } from "./build-elements";

export default parse(
	<BuildConfig
		{...{
			children: ["src/index.ts"],
			bundler: {
				bun: {
					config: {
						transpiler: {
							loader: "tsx",
						},
					},
				},
			},
		}}
	/>,
);
