#!/usr/bin/env node

const program = require('commander');
const { init , quickstart } = require('./actions/init');
const { plugin } = require('./actions/plugin');
const example = require('./actions/example');

const split = (i = '') => i.split(',');

program
  .version('0.1.0')
  .description('RNDM Renderer Redux Plugin');

program
  .command('init <name>')
  .option('-p, --packages <pkgs>', 'Determines which RNDM plugins and/or presets to install with the project. Default is none.', split)
  .action(init);

program
  .command('plugin <name>')
  .action(plugin);

program
  .command('quickstart <name>')
  .option('-p, --packages <pkgs>', 'Determines which RNDM plugins and/or presets to install with the project. Default is none.', split)
  .action(quickstart);

program
  .command('example')
  .option('-p, --package <pkg>', 'Determines which package to use')
  .option('-t, --template <template>', 'Determines which template to use')
  .action(example);

program.parse(process.argv);

module.exports.init = init;
module.exports.quickstart = quickstart;
module.exports.plugin = plugin;
