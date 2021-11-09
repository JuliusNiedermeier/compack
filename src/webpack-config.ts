import { resolve } from "path";
import { Configuration } from "webpack";
import deepmerge from "deepmerge";

const baseConfig = (tsconfigLocation?: string): Configuration => ({
  entry: resolve("src/component.ts"),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: resolve(tsconfigLocation || "tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: resolve("dist"),
    filename: "component.js",
    library: {
      type: "module",
    },
  },
  experiments: {
    outputModule: true,
  },
});

export default async (
  webpackConfig?: string,
  tsConfig?: string
): Promise<Configuration> => {
  try {
    const config = require(resolve(webpackConfig || "webpack.config.js"));
    return deepmerge(baseConfig(tsConfig), config);
  } catch {
    return baseConfig(tsConfig);
  }
};
