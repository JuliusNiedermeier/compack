import deepmerge from "deepmerge";
import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

export const baseConfig = {
  compilerOptions: {
    target: "ES3",
    module: "CommonJS",
    moduleResolution: "node",
    esModuleInterop: true,
    lib: ["DOM"],
  },

  include: [resolve()],
};

export const writeConfig = (path: string, configPath?: string) => {
  const dir = /^(.+)[\\\/]/.exec(path);
  if (dir && dir[0]) {
    mkdirSync(dir[0], { recursive: true });
  }
  writeFileSync(path, JSON.stringify(assembleConfig(configPath)));
};

const assembleConfig = (path?: string) => {
  return deepmerge(baseConfig, getCustomConfig(path));
};

const getCustomConfig = (path?: string) => {
  if (path) return gracefulRequire(resolve(path)) || {};
  else return gracefulRequire(resolve("tsconfig.json")) || {};
};

const gracefulRequire = (path): object | undefined => {
  try {
    return require(resolve(path));
  } catch {}
};
