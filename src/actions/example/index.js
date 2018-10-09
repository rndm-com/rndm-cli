const fs = require('fs');
const Process = require('child_process');

const example = (cmd) => {
  const current = process.cwd();
  const client = [current, 'node_modules', '.bin', '@rndm/client'].join('/');
  const isRNDM = fs.existsSync(client);
  if (!isRNDM) {
    console.log('No client installed. To use the RNDM Client please run: \'npm install --save @rndm/client\'');
    return;
  }
  const options = {
    stdio: 'inherit'
  };

  const { package: pkg, template } = cmd;

  const args = ['example'];

  if (pkg) {
    args.push('-p');
    args.push(pkg);
  }

  if (pkg) {
    args.push('-t');
    args.push(template);
  }

  Process.spawn(client, args, options)
};

module.exports = example;
