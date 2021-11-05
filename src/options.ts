export interface CompackCliOption {
  description: string;
  value?: string;
}

export interface CompackCliOptionList {
  [CompackCliOptionName: string]: CompackCliOption;
}

export const options: CompackCliOptionList = {
  "--webpack-config": {
    description: "Override the Webpack config",
  },
  "--tsconfig": {
    description: "Override the tsconfig.json file",
  },
};

export const parseOptions = (
  args: string[],
  options: CompackCliOptionList
): CompackCliOptionList => {
  let parsedOptions: CompackCliOptionList = {};
  Object.keys(options).forEach((optionKey) => {
    const optionPosition = args.findIndex((arg) => arg === optionKey);
    if (optionPosition < 0) return;
    else if (options[args[optionPosition + 1]]) {
      parsedOptions[optionKey] = { ...options[optionKey] };
    } else {
      parsedOptions[optionKey] = {
        ...options[optionKey],
        value: args[optionPosition + 1],
      };
    }
  });
  return parsedOptions;
};
