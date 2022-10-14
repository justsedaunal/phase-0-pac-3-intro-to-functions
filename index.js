// Follow along with the examples here
console.log("Hello world!");

function sayHello() {
  console.log("Hello world!");
}
sayHello();

function sayHelloTo(name) {
  console.log(`Hello ${name}`);
}
sayHelloTo("Seda");

function say(greeting, name) {
  console.log(`${greeting} ${name}`);
}
say("bye", "Seda");

/** factorial start */
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const result = factorial(3);
console.log(result);
/** factorial end*/

// global.expect = require("expect");

// const babel = require("babel-core");
// const jsdom = require("jsdom");
// const path = require("path");

// before(function (done) {
//   const babelResult = babel.transformFileSync(
//     path.resolve(__dirname, "..", "index.js"),
//     {
//       presets: ["es2015"],
//     }
//   );

//   const html = path.resolve(__dirname, "..", "index.html");

//   jsdom.env(
//     html,
//     [],
//     {
//       src: babelResult.code,
//       virtualConsole: jsdom.createVirtualConsole().sendTo(console),
//     },
//     (err, window) => {
//       if (err) {
//         return done(err);
//       }

//       Object.keys(window).forEach((key) => {
//         global[key] = window[key];
//       });

//       return done();
//     }
//   );
// });

function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}`);
}

sayHelloTo();

function logTwoValues(value1 = "Value1", value2 = "Value2") {
  console.log(`${value1} ${value2}`);
}

logTwoValues();

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

const p = new Person();
