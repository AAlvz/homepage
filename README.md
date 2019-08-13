# Tinkerware Provision Webpage

[![Build status: Linux](https://travis-ci.org/Tinker-Ware/homepage.svg?branch=developmet)](https://travis-ci.org/Tinker-Ware/homepage)
[![Dependency Status](https://david-dm.org/Tinker-Ware/homepage.svg?style=flat-square)](https://david-dm.org/Tinker-Ware/homepage)
[![Coverage Status](https://coveralls.io/repos/github/Tinker-Ware/homepage/badge.svg?branch=developmet)](https://coveralls.io/github/Tinker-Ware/homepage?branch=developmet)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.txt)
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/Tinker-Ware/homepage.svg)](http://isitmaintained.com/project/Tinker-Ware/homepage "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/Tinker-Ware/homepage.svg)](http://isitmaintained.com/project/Tinker-Ware/homepage "Percentage of issues still open")

##Clone submodules

##Initial Machine Setup
 1. **Install [Node 10.16.0 or greater](https://nodejs.org)** - (5.0 or greater is recommended for optimal build performance). Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
 2. **Install [Git](https://git-scm.com/downloads)**.
 3. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome. (Optional, but helpful. The latter offers time-travel debugging.)
 4. install [yarn](https://yarnpkg.com/lang/en/docs/install/)
 4. run `yarn` to install all the dependences.

##Usage

Gulp serves and build. No physical files are written.When the app is built using `gulp dist`, physical files are written to /dist and the app is served from /dist.

When you run `gulp watch`:

 1. Run tast to compiles Sass into CSS.
 2. Run tast to start a server.
 3. Run tast to watch any change.
 4. Serve site in port 3000

When you run `gulp dist`:

 1. Run task to compiles Sass into CSS
 2. Copy fonts into folder.
 3. Js was minified
 4. Webpack compress js
 5. The build was stored into dist folder

##Author Information

This role is provided by the [Tinkerware](http://tinkerware.io) project
under a **The MIT** Licence.

Feel free to open a Pull Request if you see anything that you think could be improved.
