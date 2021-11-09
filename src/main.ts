import { bundle } from "./bundle";
import { parseOptions, options } from "./options";
import init from "./init";

export const cli = (args: string[]) => {
  const parsedOptions = parseOptions(args, options);
  if (parsedOptions["--init"]) init();
  else {
    bundle(
      parsedOptions["--webpack-config"]?.value,
      parsedOptions["--ts-config"]?.value
    );
  }
};
