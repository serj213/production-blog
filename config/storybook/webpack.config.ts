import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildScssLoader } from '../loaders/scssLoader';
import { IBuildPath } from '../types/config';
import { buildSVGLoader } from '../../config/loaders/svgLoader';

export default ({ config }: {config:webpack.Configuration}) => {
  const paths: IBuildPath = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    build: '',
    entry: '',
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = [
    ...config.module.rules.map((rule:RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        // Silence the Storybook loaders for SVG files
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    }),
    // Add your custom SVG loader
    buildSVGLoader(),
  ];

  config.module.rules.push(buildScssLoader(true));

  return config;
};
