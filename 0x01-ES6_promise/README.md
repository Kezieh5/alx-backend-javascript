0x01. ES6 Promises
==================

JavaScriptES6

-   By Johann Kerbrat, Engineering Manager at Uber Works

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/75862d67ca51a042003c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220622%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220622T115226Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=914e3eb0cf483e5f34e1c50919bf2af0a0b4934b8840833ec03881dd31d834ea)

Resources
---------

**Read or watch**:

-   [Promise](https://alx-intranet.hbtn.io/rltoken/j_0FTFbkTg42JMcAbNPOVQ "Promise")
-   [JavaScript Promise: An introduction](https://alx-intranet.hbtn.io/rltoken/2Q2LzNFokcUwpA2u3FKG6Q "JavaScript Promise: An introduction")
-   [Await](https://alx-intranet.hbtn.io/rltoken/UXb3S2PMBe-SLJ55isMcow "Await")
-   [Async](https://alx-intranet.hbtn.io/rltoken/_K0C7pgEjwaIzU9RpwCb8g "Async")
-   [Throw / Try](https://alx-intranet.hbtn.io/rltoken/UTjDgvKk5l892Xslh0vqcQ "Throw / Try")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/Z4xW7_BFaRcrHxfDySjKuQ "explain to anyone"), **without the help of Google**:

-   Promises (how, why, and what)
-   How to use the `then`, `resolve`, `catch` methods
-   How to use every method of the Promise object
-   Throw / Try
-   The await operator
-   How to use an `async` function

Requirements
------------

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using ESLint
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
-   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli`
-   Install ESLint using: `npm install --save-dev eslint`

Files
-----

### `package.json`

Click to show/hide file contents

### `babel.config.js`

Click to show/hide file contents

### `utils.js`

Use when you get to tasks requiring `uploadPhoto` and `createUser`.

Click to show/hide file contents

### `.eslintrc.js`

Click to show/hide file contents

### and...

Don't forget to run `$ npm install` when you have the `package.json`

Response Data Format
--------------------

`uploadPhoto` returns a response with the format

```
{
  status: 200,
  body: 'photo-profile-1',
}

```

`createUser` returns a response with the format

```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}

```
