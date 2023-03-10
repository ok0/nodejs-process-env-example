# Version

- nvm v8.17
- node v.18.12.1
- npm v 8.19.2

# Launch On MAC

homebrew

```shell
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

npm/node

```shell
$ brew install node
```

nvm

```shell
$ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

$ nvm install 18.12.1

$ nvm use 18.12.1
```

Launch

```shell
$ npm install

# by test
$ npm run test # maybe failed
$ npm run test:starting
$ npm run test:host
$ npm run test:dotenv
$ npm run test:container
```

# Injection

## On application starting

```javascript
$ ENV_VAR_A=A ENV_VAR_B=B node

Welcome to Node.js v18.12.1.
Type ".help" for more information.
> process.env.ENV_VAR_A
'A'
> process.env.ENV_VAR_B
'B'
>
```

## Use Host variables On Local(Unix)

```javascript
$ export ENV_VAR_A=A
$ export ENV_VAR_B=B

$ node
Welcome to Node.js v18.12.1.
Type ".help" for more information.
> process.env.ENV_VAR_A
'A'
> process.env.ENV_VAR_B
'B'
>
```

## Use dotenv

```javascript
require('dotenv').config();
console.log(process.env.ENV_VAR_A);
console.log(process.env.ENV_VAR_B);
```

## Use On Docker Container

```shell
$ docker build . -t nodejs-env-example

$ docker run \
  -e ENV_VAR_A=A \
  -e ENV_VAR_B=B \
  nodejs-env-example
```
