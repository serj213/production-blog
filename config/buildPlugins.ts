import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import webpack from 'webpack'
import { type IBuildOptions } from './types/config'

export function buildPlugins (
  options: IBuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options

  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name][contenthash].css',
      chunkFilename: 'css/[name][contenthash].css'
    }),
    new webpack.DefinePlugin({
      __isDev__: isDev
    })
  ]
}

// разбиение переводов на чанки сделать и landSwicher добавить
