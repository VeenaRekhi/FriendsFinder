# FriendsFinder An Express Server App For Dating/Friendship

FriendsFinder is a compatibility-based application -- basically a dating app which runs on the express server. 
This full-stack site will take in results from users' surveys, then compare their answers with those from other users. 
The app will then display the name and picture of the user with the best overall match.

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org)
  


```js
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

## Installation

```bash
$ npm install express
```

## Features

  * Robust routing
  * HTTP helpers (redirection, caching, etc)
  * Executable for generating applications quickly
    
## Docs & Community

  * [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
  * [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
  * [Github Organization](https://github.com/expressjs) for Official Middleware & Modules
  * Visit the [Wiki](https://github.com/expressjs/express/wiki)
  * [Google Group](https://groups.google.com/group/express-js)
  
## PROJECT SOURCE can be downloaded from http://github.com
[GitHub](https://github.com/VeenaRekhi/FriendsFinder.git)

## AUTHOR -- Veena Rekhi  

## LICENSE -- READ LICENSE 

  
## Application Structure

- `server.js` - The entry point to our application. This file defines our express server and connects it to the web. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for files as well as a central location for configuration variables.
- `routes/` - This folder contains the route definitions for our API. They contain
- `public/` - This folder contains the client side informartion for our server.
