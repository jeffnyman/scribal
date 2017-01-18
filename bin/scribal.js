#! /usr/bin/env node

var path = require('path');
var app = require('commander');
var scribalReader = require('scribal-reader');
var scribalHtml = require('scribal-html');

var COMMAND_NAMES = ['html'];

app.version('Base Version: ' + require('../package.json').version + '\nReader Version: ' + scribalReader.getVersion());

app
  .command('html [spec-path]')
  .option('-o, --output-path <output-path>', 'Location where the HTML will be generated. (Defaults to <spec-path>/woven/html)')
  .description('Construct HTML representation of the spec repository.')
  .action(html);

app.parse(process.argv)

provideHelpWhenNoCommand();

function provideHelpWhenNoCommand() {
  var args = process.argv.slice(2);

  if (!args.length || COMMAND_NAMES.indexOf(args[0]) === -1) {
    app.help();
  }
}

function html(specPath, options) {
  var outputPath = options.outputPath || path.join(process.cwd(), 'woven', 'html');
  scribalHtml(specPath || process.cwd(), outputPath);
}
