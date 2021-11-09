import { webpack } from "webpack";
import webpackConfig from "./webpack-config";

export const bundle = async (
  webpackConfigPath?: string,
  tsConfigPath?: string
) => {
  const config = await webpackConfig(webpackConfigPath, tsConfigPath);
  const compiler = webpack(config, (error, stats) => {
    console.error(error, stats);
  });
};
