import webpackConfig from "./webpackConfig";
import webpack from "webpack";

export const cli = (args: Array<string>) => {
  webpackConfig().then((options) => {
    console.log("Bundling...", options);
    webpack(options, () => console.log("Bundling complete!"));
  });
};
