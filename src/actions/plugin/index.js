require('colors');
const fs = require('fs');
const Process = require('child_process');
const request = require('request');

const current = process.cwd();

const options = {
  stdio: 'inherit'
};

const changeProjectName = (name) => {
  const packagePath = [current, `rndm-render-plugin-${name}`, 'package.json'].join('/');
  const packageJSON = require(packagePath);
  packageJSON.name = `@rndm/render-plugin-${name}`.toLowerCase();
  fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2));
};

const fromGit = (name) => {
  request("https://rndm-com.firebaseio.com/api/template.json", (error, response, body) => {
    const { plugin } = JSON.parse(body);
    const git = Process.spawn('git', ['clone', '--depth=1', '--branch=master', plugin, `rndm-render-plugin-${name}`], options);
    git.on('close', () => {
      Process.exec(`rm -rf ${name}/.git`, () => {
        changeProjectName(name);
      });
    });
  });
};

const plugin = (name) => {
  fromGit(name)
};

module.exports.plugin = plugin;
