import { resolve } from "path";

const defaultConfig = {
  entry: resolve("src/component.ts"),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [resolve("src")],
      },
    ],
  },
  output: {
    path: resolve("dist"),
    filename: "bundle.js",
  },
};

export default async () => {
  const customConfig = await getCustomConfig(resolve("webpack.config.js"));
  return { ...defaultConfig, ...customConfig };
};

const getCustomConfig = (path) => {
  return import(path)
    .then((module) => (module.default ? module.default : module))
    .catch(() => ({}));
};
