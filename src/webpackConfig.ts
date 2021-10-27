import { resolve } from "path";

const defaultConfig = {
  entry: resolve("src/component.js"),
  output: {
    path: resolve("dist"),
    filename: "webcomponent.js",
  },
};

export default async () => {
  const customConfig = await getCustomConfig(resolve("webpack.config.js"));
  return { ...defaultConfig, ...customConfig };
};

const getCustomConfig = (path) => {
  return import(path).then((module) => module).catch(() => ({}));
};
