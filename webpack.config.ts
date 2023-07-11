import path from "path";
import webpack from "webpack";
import { buildConfiguration } from "./config/buildConfiguration";
import { IBuildEnv, IBuildOptions, IBuildPath } from "./config/types/config";

export default (env: IBuildEnv) => {

  const isDev = env.mode === "development"

  const paths: IBuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };


  const buildConfig: IBuildOptions = {
    mode: env.mode || "development",
    paths,
    port: env.port || 5000,
    isDev
  };

  const config: webpack.Configuration = buildConfiguration(buildConfig);
  return config;
};
