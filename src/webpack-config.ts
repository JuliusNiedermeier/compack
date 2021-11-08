import { resolve } from "path";
import { Configuration } from "webpack";
import deepmerge from "deepmerge";

export const tsconfigLocation = resolve(__dirname, "../temp/tsconfig.json");

const baseConfig: Configuration = {
  entry: resolve("src/component.ts"),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: tsconfigLocation,
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
  stats: "summary",
  experiments: {
    outputModule: true,
  },
};

export default async (path?: string): Promise<Configuration> => {
  try {
    const config = require(resolve(path || "webpack.config.js"));
    return deepmerge(baseConfig, config);
  } catch {
    return baseConfig;
  }
};
