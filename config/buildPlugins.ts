import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildPlugins(
  options: IBuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
