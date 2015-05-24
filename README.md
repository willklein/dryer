# dryer

dryer is a tool for generating lint configurations from scratch. dryer will run a linter with all rules enabled to determine what conventions your code already follows.

## Usage

You can install dryer using npm:

    npm install -g dryer

You can run dryer by providing a path:

    dryer .

You can also provide a threshold for setting rules to warn based on the failure count:

    dryer . 5

### Guide

The following process is recommended:

 1. Run dryer on your project - this gives you a `.eslintrc` file with zero failures!
 2. Run eslint
 3. Fix any syntax errors
 4. Fix warnings
 5. Configure rules that warn, to error
 6. Identify additional rules that you'd like to enable!

After step 1, you're done with dryer. It gives you a starting point for your linting configs; the rest is up to you!

## About

I recently transitioned my company's main repos from JSHint to ESLint. I hand-crafted an initial `.eslintrc` file through trial-and-error, until I had a configuration with no errors, and a handful of warnings. To make this process easier, I've written this tool to auto-generate linting configs with a similar heuristic.

## Under Development

dryer is under active development and its API may change at any time. Currently, only eslint is supported, but the plan is to add other linters in the future.

## Current Limitations

There are a handful of limitations currently:

* only works with ESLint
* does not read an existing `.eslintrc`
* overwrites any existing `.eslintrc`
* does not configure:
  * environment
  * globals
  * parser
* all rules are configured, even when could be excluded (enabled by default)

Some rules that have options that are innumerable. Those rules will never be auto-configurable beyond a suggested default.

## Help, Issues and Support

Ask questions, post issues, and share suggestions using [Waffle](https://waffle.io/willklein/dryer). Waffle is a kanban board backed by GitHub Issues. You can also tweet me [@WillsLab](https://twitter.com/willslab).


## License

[MIT](http://mit-license.org/) © [Will Klein](http://willkle.in)
