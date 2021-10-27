import webpackConfig from "./webpackConfig";
import webpack from "webpack";

export const cli = (args: Array<string>) => {
  webpackConfig().then((options) =>
    webpack(options, () => console.log("bundled"))
  );
};
