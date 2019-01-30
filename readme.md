# RNDM Command Line Interface (CLI)

## Introduction

RNDM CLI is a utility installation tool for RNDM Packages, that allows for a simple and easy to follow integration. This package works with the [RNDM React Cross Platform](https://github.com/rndm-com/rndm-cli) template as well as the RNDM Renderer suite of tools, plugins and presets.

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

Then, to get started simply run the following command from your preferred terminal interface:

```sh
npm install -g @rndm/cli
```

## Documentation

For further assistance, you can run the below command to get command line help:

```sh
rndm -h
```

### init

The init command is designed to create a new project based on the latest version of [RNDM React Cross Platform](https://www.rndm.com/docs/rndm-react-xp). Since this template will regularly updated to address new features and potential issues, this command has been left extremely simple, to allow one time installation.

**Options**:

\<name\>: The folder name into which you want the template cloned. This is a mandatory field.

--packages (-p): A comma delimited array of RNDM Plugins and Presets you would like to include as part of the init process. This is an optional field.

**Command**:
```sh
rndm init example
```

### Plugin

The plugin command is designed to create a new plugin project based on the latest version of [RNDM React Cross Platform](https://www.rndm.com/docs/rndm-render-template). Since this template will regularly updated to address new features and potential issues, this command has been left extremely simple, to allow one time installation.

**Options**:

\<name\>: The folder name into which you want the template cloned. This is a mandatory field. This will be prepended with 'rndm-render-plugin-'

**Command**:
```sh
rndm plugin example
```

### quickstart

As with the init command above, it will initialise a new project. However, this command will also run the following installation processes:

```sh
npm install;
pod install;
npm run web;
```

The concept of this is to simply initialise a project, install the relevant components and start the project running in a web browser in one command.

**Options**:

\<name\>: The folder name into which you want the template cloned. This is a mandatory field.

--packages (-p): A comma delimited array of RNDM Plugins and Presets you would like to include as part of the init process. This is an optional field.

**Command**:
```sh
rndm init example
```

### example

The example command is a helper command. Many RNDM Renderer Plugins and Presets come with helpful templates that give you a head start on how to use their integration functionality.

This command, will both show you the available examples that can be created, as well as run the respective plugin command to do so.

**Options**:

--packages (-p): The RNDM Plugin or Preset you would like to have examples for. If you would like all packages and all templates, then a value of '*' can be passed in as the value.

--templates (-t): If the name of the example template you would like created. If a value of '*' is passed here then all templates for the selected package will be installed.

**Command**:
```sh
rndm init -p *
```
