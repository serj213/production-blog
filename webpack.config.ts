import path from "path";
import webpack from "webpack";
import { buildConfiguration } from "./config/buildConfiguration";
import { IBuildOptions, IBuildPath } from "./config/types/config";


const paths: IBuildPath = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const buildConfig: IBuildOptions = {
  mode: "development",
  paths,
};

const config: webpack.Configuration = buildConfiguration(buildConfig);

export default config;
