import webpackConfig from "./webpackConfig";
import webpack from "webpack";
// import { resolve } from "path";

export const cli = (args: Array<string>) => {
  webpackConfig().then((options) => {
    console.log("Bundling...", options);
    webpack(options, (err, stats) => console.log(err, stats));
  });
};
