import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  console.log('options.isDev ', options.isDev);
  
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:5]",
            auto: (resourcePath: string) => Boolean(resourcePath.includes('module'))
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [typescriptLoader, scssLoader];
}
