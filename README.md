[![Stories in Ready](https://badge.waffle.io/willklein/dryer.png?label=ready&title=Ready)](https://waffle.io/willklein/dryer)
# dryer

dryer is a tool for generating lint configurations from scratch. dryer will run a linter with all rules enabled to determine what conventions your code already follows.

## Under Development

dryer is under active development and its API may change at any time. Currently, only eslint is supported, but the plan is to add other linters in the future.

__2015 07 15 Update__: I'm exploring folding dryer into ESLint. I've already made significant improvements, including:

* configuration of parser and environment
* reading rule schemas to derive rule options
* testing rule options beyond the default

I considered these features necessary for a proper 1.0 release and they are well on their way. Enabling auto-configuration in the ESLint CLI will be very useful for adoption, and there are benefits to directly accessing ESLint's API. If you're interested in seeing this continue to be developed as a part of ESLint, please talk to me `@willklein` in the [ESLint Gitter chat](https://gitter.im/eslint/eslint).

dryer will receive these updates in the near future. After I've completed the 1.0 milestone I will revisit whether I'll continue advancing dryer as a standalone tool. If you have any input on this, tweet me [@WillsLab](https://twitter.com/willslab).

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
