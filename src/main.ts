import { bundle } from "./bundle";
import { parseOptions, options } from "./options";
import { writeConfig } from "./ts-config";
import { tsconfigLocation } from "./webpack-config";

export const cli = (args: string[]) => {
  const parsedOptions = parseOptions(args, options);
  writeConfig(tsconfigLocation, parsedOptions["--tsconfig"]?.value);
  bundle(parsedOptions["--webpack-config"]?.value);
};
