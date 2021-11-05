import { webpack } from "webpack";
import webpackConfig from "./webpack-config";

export const bundle = async (customConfigPath?: string) => {
  const config = await webpackConfig(customConfigPath);
  const compiler = webpack(config, (error) => {
    if (error) console.error(error);
    else console.log("Component successfully generated!");
  });
};
