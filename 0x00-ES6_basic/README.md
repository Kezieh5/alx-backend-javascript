0x00. ES6 Basics
================

JavaScriptES6

-   By Johann Kerbrat, Engineering Manager at Uber Works

### Concepts

*For this project, we expect you to look at these concepts:*

-   [Modern Javascript](https://alx-intranet.hbtn.io/concepts/541)
-   [Software Linter](https://alx-intranet.hbtn.io/concepts/542)

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220620%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220620T090035Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e3fd3c23707d7997c7ed82f1c3baa3d35ff2e700b90e7882a84fddd4e68b58b8)

Resources
---------

**Read or watch**:

-   [ECMAScript 6 - ECMAScript 2015](https://alx-intranet.hbtn.io/rltoken/HRvh-7X2k2JmPu2XMuvlnQ "ECMAScript 6 - ECMAScript 2015")
-   [Statements and declarations](https://alx-intranet.hbtn.io/rltoken/bu6OK8Wbzzxr04Si-qup-w "Statements and declarations")
-   [Arrow functions](https://alx-intranet.hbtn.io/rltoken/kn70en_i7XsVl9PUhAK1fQ "Arrow functions")
-   [Default parameters](https://alx-intranet.hbtn.io/rltoken/e1-hBHivLFWOip87Lc4Jfw "Default parameters")
-   [Rest parameter](https://alx-intranet.hbtn.io/rltoken/TB_tbhDM8tPkVIS4_Tw_rw "Rest parameter")
-   [Javascript ES6 --- Iterables and Iterators](https://alx-intranet.hbtn.io/rltoken/vLOVDkX3NVceYaCGdPj-ew "Javascript ES6 --- Iterables and Iterators")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/TyqtB2dhm7oqGWD-ZNvFxw "explain to anyone"), **without the help of Google**:

-   What ES6 is
-   New features introduced in ES6
-   The difference between a constant and a variable
-   Block-scoped variables
-   Arrow functions and function parameters default to them
-   Rest and spread function parameters
-   String templating in ES6
-   Object creation and their properties in ES6
-   Iterators and for-of loops

Requirements
------------

### General

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using the [Jest Testing Framework](https://alx-intranet.hbtn.io/rltoken/K0bBQgH1IKAABeUzTmzxAA "Jest Testing Framework")
-   Your code will be analyzed using the linter [ESLint](https://alx-intranet.hbtn.io/rltoken/iKElBm_Xlj10nllm5OILKA "ESLint") along with specific rules that we'll provide
-   All of your functions must be exported

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

```

### Install Jest, Babel, and ESLint

in your project directory:

-   Install Jest using: `npm install --save-dev jest`
-   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
-   Install ESLint using: `npm install --save-dev eslint`

Configuration files
-------------------

### `package.json`

Click to show/hide file contents

### `babel.config.js`

Click to show/hide file contents

### `.eslintrc.js`

Click to show/hide file contents

### Finally...

Don't forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

