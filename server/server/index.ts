import * as path from 'path';
import * as fs from 'fs';
import * as  chalk from 'chalk';
import * as  cp from 'child_process';

const buildDir = path.resolve(process.cwd(), 'build');/*
const isProd = process.env.NODE_ENV === 'production'

if (!fs.existsSync(buildDir)) {
  console.log(chalk.yellow('Build folder not found. Running webpack for you...'));
  cp.execSync(`npm run build`);
} else {
  isProd && console.log(chalk.yellow('Starting from previous build. If you want to create a new build, run `npm run build` first.'));
}
*/
require("./setup.js")({
  outputPath: buildDir,
  publicPath: '/',
});
