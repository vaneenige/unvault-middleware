<h1>Unvault Middleware</h1>

As the name suggests this is a middleware based on [unvault](https://github.com/vaneenige/unvault), a minimal layer for node that allows results of time-consuming tasks to be stored. This middleware only needs a simple configuration to automatically setup routes, store expected responses and deliver results fast (see [benchmarks](https://github.com/vaneenige/unvault#benchmarks)).

<a href="https://www.npmjs.org/package/unvault-middleware">
  <img src="https://img.shields.io/npm/v/unvault-middleware.svg?style=flat" alt="npm">
</a>

## Install

```
$ npm install --save unvault-middleware
```

## Usage

```js
const polka = require("polka");
const middleware = require("unvault-middleware");

const route = {
  path: "/random",
  interval: 1000,
  update: () => {
    return JSON.stringify({
      random: Math.random()
    });
  }
};

polka()
  .use(middleware([route]))
  .listen(3000);
```

**Result:** The example above creates a node server (in this case with [Polka](https://github.com/lukeed/polka)) that uses the middleware. The added route (`http://localhost:3000/random`) will return a stored JSON response with a random value that is updated automatically every second.

## License

MIT © [Colin van Eenige](https://use-the-platform.com).
