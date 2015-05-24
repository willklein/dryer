# dryer

dryer is a tool for generating lint configuration from scratch. dryer will run a linter with all rules enabled to determine what conventions your code already follows.

## Usage

You can install dryer using npm:

    npm install -g dryer

You can run dryer by providing a path:

    dryer .

You can also provide a threshold for setting rules to warn based on the failure count:

    dryer . 5

## Guide

The following process is recommended:
 1. Run dryer on your project
 2. Run eslint
 3. Fix any syntax errors
 4. Fix warnings
 5. Configure rules that warn, to error

## Under Development

dryer is under active development and its API may change at any time. Currently, only eslint is supported, but the plan is to add other linters in the future.

## Current Limitations

While this works with ESLint, there are a handful of limitations currently:

* does not read an existing config file
* overwrites any existing file
* does not configure:
  * environment
  * globals
  * parser
* writes rules that are enabled by default, where they could be excluded
