import ncp from "ncp";
import { resolve } from "path";
import { exec } from "child_process";

export default () => {
  ncp(resolve(__dirname, "../template"), process.cwd(), (err) => {
    console.log(err || "Project initialized");
    exec("npm i -D @juliusniedermeier/compack", (error, stdout, stderr) => {
      if (error) console.error(error);
      else console.log(stdout);
    });
  });
};
