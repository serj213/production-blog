import path from "path";
import webpack from "webpack";
import { buildConfiguration } from "./config/buildConfiguration";
import { IBuildEnv, IBuildOptions, IBuildPath } from "./config/types/config";

export default (env: IBuildEnv) => {
  const paths: IBuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  console.log('env ', env);
  

  const buildConfig: IBuildOptions = {
    mode: env.mode || "development",
    paths,
    port: env.port || 5000,
  };

  const config: webpack.Configuration = buildConfiguration(buildConfig);
  return config;
};
