import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';
/* eslint-disable no-console */

//important global variable that things like Babel etc look for to
//	know how to run
process.env.NODE_ENV = 'production';

console.log(chalk.blue('generating minified bundle for production, this will take a moment'))
webpack(webpackConfig).run((err,stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }
  const jsonStats = stats.toJson();
  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error=>console.log(chalk.red(error)))
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack had the following errors'));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats ${stats}`);

  // if made this far, build suceeded
  console.log(chalk.green('The app has been built for production and written to /dist'));
  return 0;
})
