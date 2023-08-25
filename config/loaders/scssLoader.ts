import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildScssLoader = (isDev: Boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:5]',
          auto: (resourcePath: string) => Boolean(resourcePath.includes('module')),
        },
      },
    },
    // Compiles Sass to CSS
    'sass-loader',
  ],
});
