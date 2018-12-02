require('colors');
const fs = require('fs');
const { noop } = require('lodash');
const Process = require('child_process');
const request = require('request');

const current = process.cwd();

const options = {
  stdio: 'inherit'
};

const changeProjectName = (name) => {
  const packagePath = [current, name, 'package.json'].join('/');
  const packageJSON = require(packagePath);
  packageJSON.name = name;
  fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2));
};

const addPackages = (name, { packages = [] }, callback = noop) => {
  request("https://rndm-com.firebaseio.com/api/packages.json", (error, response, body) => {
    const json = JSON.parse(body);
    if (json) {
      const keys = Object.keys(json);
      const available = packages.filter(p => keys.includes(p));
      const packagePath = [current, name, 'package.json'].join('/');
      const packageJSON = require(packagePath);
      const { dependencies } = packageJSON;
      available.forEach(p => {
        const { local } = json[p];
        dependencies[p] = local;
      });
      fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2));
      callback();
    }
  });
};

const fromGit = (name, cmd, callback = noop) => {
  request("https://rndm-com.firebaseio.com/api/template.json", (error, response, body) => {
    const { url } = JSON.parse(body);
    const git = Process.spawn('git', ['clone', '--depth=1', '--branch=master', url, name], options);
    git.on('close', () => {
      Process.exec(`rm -rf ${name}/.git`, () => {
        changeProjectName(name);
        addPackages(name, cmd, callback)
      });
    });
  });
};

const init = (name, cmd) => {
  fromGit(name, cmd)
};

const quickstart = (name, cmd) => {
  fromGit(name, cmd, () => {
    options.cwd = [current, name].join('/');
    const install = Process.spawn('npm', ['install'], options);
    install.on('close', () => {
      Process.spawn(`npm`, ['run', 'web'], options)
    });
  });
};

module.exports.init = init;
module.exports.quickstart = quickstart;
