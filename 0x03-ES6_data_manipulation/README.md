0x03. ES6 data manipulation
===========================

JavaScriptES6

-   By Johann Kerbrat, Engineering Manager at Uber Works

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/6ab7bec4727cb5c91257.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220621%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220621T215421Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=24767319697aca6ec8f03a5474cac2e5ba321e27abf50a3edc04b66413f17e54)

Resources
---------

**Read or watch**:

-   [Array](https://alx-intranet.hbtn.io/rltoken/bcXqK1IaIHtrZ45sv0RxsQ "Array")
-   [Typed Array](https://alx-intranet.hbtn.io/rltoken/BQ5bjKk8Q2YrpwVl0gZpXQ "Typed Array")
-   [Set Data Structure](https://alx-intranet.hbtn.io/rltoken/Ch8vq39y9QnlTMr8CymgEg "Set Data Structure")
-   [Map Data Structure](https://alx-intranet.hbtn.io/rltoken/W29MV3f8Ii4HmeJSALNIpw "Map Data Structure")
-   [WeakMap](https://alx-intranet.hbtn.io/rltoken/pSetFVFeIR660GPE0flPdg "WeakMap")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/vFyWo9TJ_4ypOC6uPi2low "explain to anyone"), **without the help of Google**:

-   How to use map, filter and reduce on arrays
-   Typed arrays
-   The Set, Map, and Weak link data structures

Requirements
------------

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using ESLint
-   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
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

### and...

Don't forget to run `$ npm install` when you have the `package.json`
