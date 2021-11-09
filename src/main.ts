import { bundle } from "./bundle";
import { parseOptions, options } from "./options";

export const cli = (args: string[]) => {
  const parsedOptions = parseOptions(args, options);
  bundle(
    parsedOptions["--webpack-config"]?.value,
    parsedOptions["--ts-config"]?.value
  );
};
